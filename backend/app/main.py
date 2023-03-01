from fastapi import FastAPI

app = FastAPI()

@app.get("/")

async def root():

    return {"message": "Hello Satan"}

@app.get("/result/{score}")

async def result_exam(score):

    score = int(score)

    if(score >= 50):

        result = "Pass"

    else:    

        result = "No pass"

    return {"your result is": result}