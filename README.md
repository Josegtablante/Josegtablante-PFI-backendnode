# Vercel URL:
vercel_uri : https://josegtablante-pfi-backendnode.vercel.app/

Backend en Node.js para el Proyecto Final Integrado de Talento Tech.  

## 🔎 Descripción  
Este proyecto implementa un backend REST con Node.js, pensado para servir como API de soporte para una aplicación cliente. Maneja rutas, lógica de negocio y respuesta en formato JSON. Está diseñado para ser un servidor sin interfaz gráfica (solo API).  

## 🧰 Tecnologías  
- Node.js  
- JavaScript (ES6+)  
- Express (o equivalente para routing — revisar en `index.js`)
- cors (par el manejo de Headers)
- jwtoken
- dotenv
- firebase
- npm / package.json para gestión de dependencias  

## 🚀 Instalación y ejecución  

```bash
# Clonar el repositorio  
git clone https://github.com/Josegtablante/Josegtablante-PFI-backendnode.git  
cd Josegtablante-PFI-backendnode  

# Instalar dependencias  
npm install  

# Ejecutar en modo producción  
npm start
```

## USAR DESDE POSTMAN

Crear Json Web Token 

Este token sera necesario ya que lo usaremos para poder usar el create y el delete

/api/login
```
response: {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJpYXQiOjE3NjQ0ODA3NDQsImV4cCI6MTc2NDQ4NDM0NH0.6xTeR2ekkEBF6ZKjHSBZVqBjNZSeBK4Kis9kPcSK12A"
}
```

## CRUD

### GET ALL PRODUCTS

{vercel_uri}/api/products 

- obtener todos los productos

```
response: [
    {
        "nombre": "pan",
        "categoria": "harina",
        "descripcion": "1k de pan",
        "precio": "3500",
        "id": "SB2gViIUtDkm64VA4imN"
    },
    {
        "nombre": "leche",
        "categoria": "lacteos",
        "descripcion": "1 litro de leche",
        "precio": "3500",
        "id": "XU0yYyATVHRBpzHB0IUC"
    }
]
```

### GET PRODUCT BY ID

{vercel_uri}/api/products/{id}

- obtener un producto por id
```
response: {
    "descripcion": "1k de pan",
    "categoria": "harina",
    "descripcion": "1k de pan",
    "precio": "3500",
    "nombre": "pan"
}
```

### CREATE PRODUCT

{vercel_uri}/api/products/create

- Crear un producto
- Importante agregar el token Auth Type como Bearer Token
  
```
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
    "nombre": "sal",
    "categoria": "sal",
    "precio": "2500",
    "descripcion": "1k de sal fina"
}'
```


### DELETE PRODUCT BY ID

{vercel_uri}/api/products/{id}

- Elimina un producto por su ID
- Importante agregar el token Auth Type como Bearer Token

```
response: 
OK
```
