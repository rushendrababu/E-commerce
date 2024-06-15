import psycopg2
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import psycopg2.extras

connection = psycopg2.connect(user="PASTE DB",
                                  password="PASSWORD",
                                  host="HOST_NO",
                                  port="PORT_NO",
                                  database="Ecommerce")

cur=connection.cursor(cursor_factory=psycopg2.extras.DictCursor)


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    
)




@app.get('/data')
def getdata(productname:str=''):
    cur.execute (f"SELECT * FROM public.main_info  WHERE product_name ='{productname}' ORDER BY product_id ")
    data = cur.fetchall()
    result =[]
    for row in data:
            result.append(dict(row))
    return result


@app.get('/alldata')
def getalldata():
    cur.execute ("SELECT * FROM public.main_info ")
    data = cur.fetchall()
    result =[]
    for row in data:
            result.append(dict(row))
    return result