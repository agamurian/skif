from api import app
from waitress import serve

# Run Debug Mode
if __name__ == '__main__':
    app.run(debug=True)

# Run production server
# if __name__ == '__main__':
#     serve(app, host='0.0.0.0', port=5000)
