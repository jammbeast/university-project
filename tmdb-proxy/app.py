from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
import hashlib

app = Flask(__name__)
CORS(app)
# Подключение к базе данных
conn = psycopg2.connect(
    dbname="watchit",
    user="student5", 
    password="student06122024",  
    host="81.177.136.21",  
    port="5432"  
)
cursor = conn.cursor()
@app.route('/')
def home():
    return "Добро пожаловать на сервер"

import traceback  # Для печати полного стека ошибки

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email и пароль обязательны"}), 400

    # Хэшируем пароль
    password_hash = hashlib.sha256(password.encode()).hexdigest()

    try:
        with conn.cursor() as cursor:
            # Добавляем данные в таблицу Registration
            cursor.execute(
                "INSERT INTO Registration (email, password_hash) VALUES (%s, %s) RETURNING registration_id",
                (email, password_hash)
            )
            registration_id = cursor.fetchone()[0]

            conn.commit()
            return jsonify({
                "message": "User registered successfully",
                "registration_id": registration_id
            }), 201

    except Exception as e:
        conn.rollback()
        print("Ошибка сервера:", e)
        return jsonify({"error": "Ошибка при регистрации пользователя"}), 500




@app.route('/reviews', methods=['GET', 'POST'])
def reviews_handler():
    if request.method == 'GET':
        return "Список рецензий."
    elif request.method == 'POST':
        return "Добавлена рецензия."
# ручка для добавления рецензии с оценкой
@app.route('/add_review_with_rating', methods=['POST'])
def add_review_with_rating():
    data = request.json
    movie_id = data['movie_id']
    user_id = data['user_id']
    rating = data['rating']
    review = data.get('review', '')  # Если review не передали, ставим пустую строку

    cursor.execute("""
        INSERT INTO MovieRatings (movie_id, user_id, rating, review)
        VALUES (%s, %s, %s, %s)
    """, (movie_id, user_id, rating, review))
    conn.commit()
    return jsonify({"message": "Review with rating added successfully!"})

#ручка для добавления рецензии без оценки
@app.route('/add_review_without_rating', methods=['POST'])
def add_review_without_rating():
    data = request.json
    movie_id = data['movie_id']
    user_id = data['user_id']
    review = data['review']

    cursor.execute("""
        INSERT INTO MovieRatings (movie_id, user_id, review)
        VALUES (%s, %s, %s)
    """, (movie_id, user_id, review))
    conn.commit()
    return jsonify({"message": "Review without rating added successfully!"})

#ручка для получения информации о пользователе
@app.route('/user_profile/<int:user_id>', methods=['GET'])
def user_profile(user_id):
    cursor.execute("""
        SELECT username, email, first_name, last_name, gender, date_of_birth
        FROM Users WHERE user_id = %s
    """, (user_id,))
    user = cursor.fetchone()
    if user:
        return jsonify({
            "username": user[0],
            "email": user[1],
            "first_name": user[2],
            "last_name": user[3],
            "gender": user[4],
            "date_of_birth": user[5]
        })
    else:
        return jsonify({"error": "User not found"}), 404

#ручка для расчёта средней оценки фильма
@app.route('/movie_rating/<int:movie_id>', methods=['GET'])
def movie_rating(movie_id):
    cursor.execute("""
        SELECT AVG(rating) FROM MovieRatings WHERE movie_id = %s
    """, (movie_id,))
    avg_rating = cursor.fetchone()[0]
    if avg_rating is not None:
        return jsonify({"movie_id": movie_id, "average_rating": round(avg_rating, 2)})
    else:
        return jsonify({"message": "No ratings for this movie yet."})

if __name__ == '__main__':
    app.run(debug=True)
