# Import necessary modules
with open("MyProfilePicture.jpg", "rb") as image_file:
    binary_data = image_file.read()  # Read image file as binary data

# Display binary data as a stream of 0s and 1s
binary_stream = ''.join(format(byte, '24b') for byte in binary_data)
print(binary_stream)