from typing import Union
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class OrderBlouse(BaseModel):
    # def __init__(self,prenom,nom,telephone,institution,epaule,longueur_habit,couleur):
        # all order attributes
        prenom: str
        nom: str   
        telephone: str
        institution: str
        epaule: float
        longueur_habit:float
        couleur: str

class OrderTenue(BaseModel):
    # def __init__(self,prenom,nom,telephone,institution,epaule,longueur_habit,couleur):
        # all order attributes
        prenom: str
        nom: str   
        telephone: str
        institution: str
        epaule: float
        longueur_habit:float
        couleur: str



@app.post("/api/v0/orders/tenue-bloc")
def create_order(order: OrderTenue):
    return {"order":order}


@app.post("/api/v0/orders/blouse")
def create_order(order: OrderBlouse):
    return {"order":order}