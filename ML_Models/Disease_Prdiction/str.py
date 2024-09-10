import streamlit as st
import tensorflow as tf
from PIL import Image
import numpy as np

# Load your model
model = tf.keras.models.load_model('model.h5')

# Define a function to preprocess the image
def preprocess_image(image):
    # Resize the image to the expected input size of the model
    image = image.resize((150, 150))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)  # Add batch dimension
    return image


# Define the Streamlit app
st.title("Plant Disease Detection")

st.write("Upload an image of a plant leaf:")

# File uploader widget
uploaded_file = st.file_uploader("Choose an image...", type="jpg")

if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption='Uploaded Image.', use_column_width=True)

    # Preprocess the image and make prediction
    image = preprocess_image(image)
    predictions = model.predict(image)
    class_labels =  [
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
    # Replace with actual class labels
    predicted_class = class_labels[np.argmax(predictions)]
    st.write(f'Predictions: {predicted_class}')


