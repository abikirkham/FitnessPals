import psycopg2

conn = psycopg2.connect(
    dbname="fitnesspalsdb",
    user="fitnesspalsuser",
    password="fitnesspals123",
    host="localhost",
    port="5432"
)

cursor = conn.cursor()
