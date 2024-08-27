# Visualización de datos (API WEB)
### Desafio
Construir y desplegar un panel de control de una aplicación web en un servicio online, para la visibilidad de datos, a travez de gráficos interactivos; a partir de una dataFrame de anuncios de venta de vehículos 

**SKILLS: desarrollo web - ingeniería de software**

### Contenido
1. Desarrollo de la estructura principal del proyecto (descripción del proyecto, requerimientos, base de datos, ambiente virtual)
2. Realice un análisis exploratorio de la base de datos proporcionada (EDA)
3. Estructure el código de raíz con las librerias: pandas, plotly-express y streamlit
    - Título principal con descripción del proyecto y una visualización del dataFrame.
    - Subtítulo, con descripción del histograma que expone la condición del vehículo VS Año del modelo.
    - Subtítulo, con descripción de un diagrama de barras presentando los tipos modelos de cada marca.
    - Subtítulo, con descripción de un diagrama de dispersión revelando el impacto de odometro VS Valor del vehículo.
4. Despliegue de la versión final de la aplicación en render
   
## Dashboard
Para interactuar los datos de los análisis y ver la versión final de la aplicación, mirarlos en [Render](https://visualizacion-de-datos-mediante-una-api.onrender.com)
<img src="https://github.com/alll1997/portafolio/blob/main/Api%20web/imagenes/api_3.png" width=1000/>

## Conclusiones
- Los vehículos más recientes (con años de modelo más nuevos) tiendan a tener precios más altos. Esto se debe a que los vehículos nuevos suelen tener menos desgaste y, por lo tanto, conservan un mayor valor.
- Los vehículos con mayor kilometraje probablemente tengan precios más bajos. Un mayor kilometraje generalmente indica más uso y posible desgaste, lo que podría reducir el valor del vehículo.
- Los vehículos clasificados como "excellent" o "like new" probablemente tengan precios más altos en comparación con aquellos en "fair" o "good" condición. La condición del vehículo es un factor clave en la determinación de su valor de reventa.
- Ciertos tipos de vehículos, como SUVs o pickups, podrían tener un precio promedio más alto que sedanes o compactos. Esto podría estar relacionado con la demanda y la percepción de valor de estos tipos de vehículos en el mercado de usados.
- Vehículos con tracción en las cuatro ruedas (4WD) podrían tener precios más altos, ya que esta característica suele ser valorada en mercados donde las condiciones climáticas o de terreno lo requieren.
- Los vehículos que permanecen listados por más tiempo podrían tener precios más altos al inicio, lo que podría indicar una reducción de precio con el tiempo si no se venden.
- Los motores de más cilindros (por ejemplo, 8 o 12 cilindros) podrían tener precios más altos debido a su rendimiento y capacidad, aunque también podrían estar menos demandados por su menor eficiencia de combustible.
