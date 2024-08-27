# Tienda online internacional (A|B Test)
Analítica de una tienda en línea internacional. Tus predecesores no consiguieron completarla: lanzaron una prueba A/B y luego abandonaron (para iniciar una granja de sandías en Brasil). Solo dejaron las especificaciones técnicas y los resultados de las pruebas.

**SKILLS: Preprocesamiento de datos - Análisis exploratorio - Análisis estadistico - Análisis de negocio - Explicación de datos**

**Hiportesis**: 
Dentro de los 14 días posteriores a la inscripción, los usuarios mostrarán una mejor conversión en vistas de la página del producto (el evento `product_page`), instancias de agregar artículos al carrito de compras (`product_card`) y compras (`purchase`). En cada etapa del embudo `product_page → product_card → purchase`, habrá al menos un 10% de aumento.

## Estructura del proyecto
- Describe los objetivos del estudio
- Importar los datos (EDA)
- Análisis exploratorio de datos
  - Estudia la conversión en las diferentes etapas del embudo.
  -  ¿El número de eventos por usuario está distribuido equitativamente entre las muestras?
  -  ¿Hay usuarios que están presentes en ambas muestras?
  -  ¿Cómo se distribuye el número de eventos entre los días?
- Peculiaridades en los datos que hay que tener en cuenta
- Evaluar los resultados de la prueba A|B
- Valores netos de la prueba A|B
  - Prueba Z: Comprobar la diferencia estadística entre las proporciones
      - Hipotesis de la interface de EU
      - Hipotesis recomendación del sistema
- Conclusiones

## Notebook
Para visualizar del analisis, mirarlos en el [Notebook](https://github.com/alll1997/portafolio/blob/main/Tienda%20en%20línea%20internacional/recommender_system_test.ipynb)

<img src="https://github.com/alll1997/portafolio/blob/main/Tienda%20en%20línea%20internacional/image.png" width=1000/>

## Conclusiones
- Etapa EDA: Se muestra como los usuarios del grupo A tienen una variación en el comportamiento, dando una mayor cantidad de los usuarios de que compran a los que ingresan a la pagina de carrito, evento que no se muestra en para el grupo B, pero que marca una generalidad en el comportamiento del grupo A, indeterminadamente del test de aplicado (interface de EU|recomendación del sistema)
- Resultados de la prueba A|B: En el test de recomendaciones del sistema, el grupo B es un 31% de la representación del grupo A, en su etapa inicial, lo cual es un facto a tener en cuenta para no proceder con el test, por tanto, los recomendación dada por la prueba Z es validada por el número de usuarios presentes en un principio del test. Referente a la prueba de la interface de EU se puede determinar que las muestras de los grupo A|B de son equivalentes, según las pruebas realizadas, además que sus usuarios iniciales son equivalentes con un 2% de diferencia entre los grupos.
