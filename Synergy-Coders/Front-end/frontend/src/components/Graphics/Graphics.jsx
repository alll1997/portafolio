import React from "react";
import LineGraph from "../LineGraph/LineGraph";
import BarGraphic from "../BarGraphic/BarGraphic";
import { Table } from "../Table/Table";
import { BarChartWithFlags } from "../Countries/Countries";
import { PieChartGraph } from "../PieChart/PieChart";

function Graphics() {
	return (
		<div className="container flex flex-col m-auto justify-center items-center place-items-center p-10 ">
			<h2 className="text-white text-center text-xl font-bold p-5">
				Cantidad de productos comprados y cancelados a través del tiempo
			</h2>
			<LineGraph />
			<p className="text-white text-xl font-bold p-8 text-justify">
				En Agosto se observa un crecimiento en la cantidad de articulos
				comprados. El crecimiento continua hasta diciembre, fecha en que se
				dejan de tener registros. En cuanto a la cantidad de productos
				cancelados hay dos temporadas con cantidades elevadas, que son Enero y
				Diciembre. Al comparar ambas líneas de tendencia, se observa que los
				productos cancelados son significativamente menores que los comprados,
				lo que confirma la estabilidad y solidez en el comportamiento de ventas.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Top de productos de vendidos
			</h2>
			<BarGraphic />
			<p className="text-white text-xl font-bold p-8 text-justify">
				En está gráfica, se muestran los 20 productos más vendidos, ofreciendo
				una visión clara y concisa de las preferencias de todos los clientes,
				incluyendo los registrados y los que no estan registrados.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Top 10 países con mayor número de transacciones:
			</h2>
			<div className="flex flex-col w-full gap-4 p-3 overflow-hidden items-center">
				<img
					src="/img/world_map.png"
					className="rounded-lg sm:w-[350px]"
					alt="Imagen del mundo que muestra el top de 10 países con mayor número de transacciones"
				/>
				<img
					src="/img/world.png"
					className="rounded-lg sm:w-[350px]"
					alt="Imagen del mundo que muestra el top de 10 países con mayor número de transacciones"
				/>
			</div>
			<div className="flex flex-col sm:flex-row gap-10 align-top p-4 ">
				<ul className="text-white font-bold text-justify">
					<li>1. Reino Unido </li>
					<li>2. Alemania </li>
					<li>3. Francia </li>
					<li>4. EIRE </li>
					<li>5. España </li>
					<li>6. Paises Bajos </li>
					<li>7. Bélgica </li>
					<li>8. Suiza </li>
					<li>9. Portugal </li>
					<li>10. Australia </li>
				</ul>
				<p className="text-white text-xl font-bold text-justify max-w-[500px] align-top">
					Como se observa en el mapa, el 91% de los compradores se encuentran en
					Reino Unido.
				</p>
			</div>
			<div className="flex flex-col items-center mt-3">
				<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 ">
					Al comparar las compras con las devoluciones, el top 4 de los paises
					con más compras, coincide con el top 4 de países con más
					cancelaciones.
				</p>
				<Table />
				<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
					Sin embargo, hay países que aparecen en el top 10 de Cancelaciones
					pero no en el de compras como lo son Estados Unidos, Italia y Japón.
				</p>
			</div>
			<BarChartWithFlags />
			<div>
				<h4 className="text-white">Ganancias por país</h4>
				<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
					Al obtener los países con mayores ganancias, tomando en cuenta las
					devoluciones, el 84% de los ingresos se obtienen de Reino unido. Los
					demás países, individualmente, contribuyen con menos del 3% de las
					ganancias.
				</p>
				<PieChartGraph />
			</div>
		</div>
	);
}

export default Graphics;
