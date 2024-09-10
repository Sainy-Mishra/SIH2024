# from fastapi import FastAPI, File, UploadFile
# from pydantic import BaseModel
# from PIL import Image
# import numpy as np
# import tensorflow as tf
# from io import BytesIO

# from fastapi.middleware.cors import CORSMiddleware


# # Load your model
# model = tf.keras.models.load_model('model.h5')

# # Initialize FastAPI app
# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],  # Adjust according to your Next.js app URL
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class PredictionResponse(BaseModel):
#     prediction: str

# def preprocess_image(image: Image.Image) -> np.ndarray:
#     image = image.resize((150, 150))
#     image = np.array(image) / 255.0
#     image = np.expand_dims(image, axis=0)
#     return image

# @app.post("/predict/", response_model=PredictionResponse)
# async def predict(file: UploadFile = File(...)) -> PredictionResponse:
#     image = Image.open(BytesIO(await file.read()))
#     processed_image = preprocess_image(image)
#     predictions = model.predict(processed_image)
#     class_labels = [
#         "Tomato Bacterial Spot",
#         "Tomato Early Blight",
#         "Tomato Late Blight",
#         "Tomato Leaf Mold",
#         "Tomato Septoria Leaf Spot",
#         "Tomato Spider Mites (Two-Spotted Spider Mite)",
#         "Tomato Target Spot",
#         "Tomato Yellow Leaf Curl Virus",
#         "Tomato Mosaic Virus",
#         "Tomato Healthy"
#     ]
#     predicted_class = class_labels[np.argmax(predictions)]
#     return {"prediction": predicted_class}

from fastapi import FastAPI, Request, Response
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi import File, UploadFile
from PIL import Image
import numpy as np
import tensorflow as tf
from io import BytesIO
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust according to your Next.js app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Data(BaseModel):
    name: str
    age: int

@app.get('/api/data')
async def get_data(request: Request):
    data = Data(name='John Doe', age=30)
    return data


    # Load your model
model = tf.keras.models.load_model('model.h5')

class PredictionResponse(BaseModel):
    prediction: str
def preprocess_image(image: Image.Image) -> np.ndarray:
    image = image.resize((150, 150))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image
@app.post("/predict/", response_model=PredictionResponse)
async def predict(file: UploadFile = File(...)) -> PredictionResponse:
    image = Image.open(BytesIO(await file.read()))
    processed_image = preprocess_image(image)
    predictions = model.predict(processed_image)
    class_labels = [
        "Tomato Bacterial Spot",
        "Tomato Early Blight",
        "Tomato Late Blight",
        "Tomato Leaf Mold",
        "Tomato Septoria Leaf Spot",
        "Tomato Spider Mites (Two-Spotted Spider Mite)",
        "Tomato Target Spot",
        "Tomato Yellow Leaf Curl Virus",
        "Tomato Mosaic Virus",
        "Tomato Healthy"
    ]
    predicted_class = class_labels[np.argmax(predictions)]
    return {"prediction": predicted_class}