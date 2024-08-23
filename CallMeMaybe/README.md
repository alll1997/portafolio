# Telecomunicaciones: identificar operadores ineficientes
La telefonía virtual CallMeMaybe presta un servicio a **organizaciones que necesitan distribuir gran cantidad de llamadas** entrantes entre varios operadores, o realizar llamadas salientes a través de sus operadores. Los operadores a su ves pueden realizar llamadas internas para comunicarse entre ellos. Estas llamadas se realizan a través de la red de CallMeMaybe.

Para mejorar el servicio se está desarrollando una nueva función que brindará a los supervisores y las supervisores **información sobre los operadores menos eficaces**.

Para ello se busca **analizar la cantidad de llamadas perdidas entrantes y salientes, tiempo de espera y la cantidad de llamadas salientes, determinando una perspectiva de las condiciones de los operadores menos eficaces**.

## Estructura del proyecto
- EDA (Preprocesamiento de datos)
  - Importar datasets y optimizar sus valores según el tipo de datos que requiera
  - Formatear valores
  - Analizar los valores nulos y duplicados de los datos
  - Revisión de correlación de las caracteristicas del servicio recibido por los clientes
  - Revisar las metricas (promedio | mediana) de las características de operadores y clientes
- Análisis de patrones temporales: Revisar si existe una causa que justifique la ineficiencia de un operador
- Análisis de cohortes (fecha y comportamiento)
- Calcular los KPIs significativos y graficos necesarios
- Contruir un modelo piloto para predecir los operadores ineficientes (aprendizaje supervisado)
- Dashboard de visualizaciones
- Presentación de conclusiones
- Concluciones generales

## Bibliografia
- Estructuración de analisis (https://telecoms.adaptit.tech/es/blog/data-analytics-the-key-to-kpi-analysis/)
- Partes del analisis e importancia de modelos predictivos(https://towardsdatascience.com/what-is-predictive-analytics-dc6db9759936)
- Segmentación de los clientes y posibleas causas de externas de ineficiencia (https://telecoms.adaptit.tech/es/blog/what-is-customer-analytics-in-telecoms/)
- Ejemplos de KPIs relevantes en el sector (https://www.zendesk.com.mx/blog/kpis-experiencia-cliente/)
- Ejemplo de estructuración del dashboard (https://www.datapine.com/blog/call-center-dashboard-reports-and-data-analytics/#call-center-metrics)
- Importancia de los modelos predictivos para la optimización de los servicios en telecomunicaciones (https://www.matellio.com/blog/predictive-analytics-in-telecom/)

## Hipotesis
Una posible manera de determinar las condiciones de los operadores menos eficaces, se deben tener en cuenta que existen muchos valores atipicos, por tanto se tiene como valores de referencia las medianas aritmeticas. Esto nos permitio poner un margen preliminar para la identificación de las operaciones de los operadores

- La cantidad de llamadas perdidas externas perdidas tiene como limite superior entre 7 a 11, respecto a las llamadas internas no debe supera de 2 a 3.Se determino que los operadores que tuviesen más del 50% de las llamadas perdidas, son un factor a tener en cuenta para sue valuación
- El tiempo de espera no debe ser mayor a 80 en general, sin embargo el plan A tienen de 3 a 4 veces más de duración en las llamadas lo que puede se un factor a tener en cuenta se los operadores son fijos para cada operador, lo que dificultaria la respuesta de estos, como se muestra en una correlación directa . Se debe tener en cuenta queel plan C es el mas popular, tiene el menos tiempo de duracion de llamadas y un promedo de tiempo de espera de 50.Se ven anomalias a lo largo del tiempo en las llamadas perdidas del plan  y aa lo largo del aanalisis, se muestra con se superan las llamadas perdidas a laas contetadas, de modo que se recomiento una optimización de procesos en las operaciones
- En general el promedio del tiempo de las llamadas externas es superior a 500, mientras que las internas rondas las 50 a 100 aproximadamente, para tener en cuenta la carga laboral de los operadores. Este es aun factor determinante para la clasificación de los operadores, esto es por que el percentil de operadores que superiore al 90% respecto a sus compañeros, entrara en una clasifición de ineficiencia
- La mediana de llamadas salientes es de 100, llegando a 200 el 75% de las veces.Esto da una tendencia de las tareas que cumplen los operadores.

## Dashboard
Para interactuar los datos de los analisis, mirarlos a traves de [Tableau](https://public.tableau.com/app/profile/anngie.lopez/viz/proyecto_final_17212786436770/Dashboard1)
<img src="https://github.com/alll1997/portafolio/blob/main/CallMeMaybe/image.png" width=1000/>

## Conclusiones
El 34% de las llamadas recibidas son pérdidas, de modo se sugiere una optimización de procesos en la gestión de llamadas y aumentar la capacidad de personal para la recepción de llamadas, esto beneficiara la percepción del esfuerzo en los usuarios en el uso del servicio, además de un aumento en la retención. Las interacciones entre los operadores representan el 14% de las llamadas totales, sin embargo, llega a un 90% en el esfuerzo requerido para mejorar las llamadas, se podría buscar una regulación de las interacciones de entre los operadores, a fin de optimizar tiempo y siendo más eficiente la operación. Se hizo una clasificación preliminar donde los operadores que tengan menos el 25% de registros, respecto a sus compañeros, se definirán como juniors; los operadores que se superan el 50% de llamadas perdidas, están en el 5% superior de las llamadas de espera o el 10% máximo en los la duración media de las llamadas, serán visto como ineficiente su trabajo; esto vislumbra una posible clasificación los trabajo de los operadores.
