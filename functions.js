 
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80872535-1', 'auto');
  ga('send', 'pageview');
 
function getLongDateES() {
    var days=new Array(7);
days[1]="Domingo";
days[2]="Lunes";
days[3]="Martes";
days[4]="Mi&eacute;rcoles";
days[5]="Jueves";
days[6]="Viernes";
days[7]="S&aacute;bado";

var months=new Array(13);
months[1]="Enero";
months[2]="Febrero";
months[3]="Marzo";
months[4]="Abril";
months[5]="Mayo";
months[6]="Junio";
months[7]="Julio";
months[8]="Agosto";
months[9]="Septiembre";
months[10]="Octubre";
months[11]="Noviembre";
months[12]="Diciembre";

var time=new Date();
var lmonth=months[time.getMonth() + 1];
var date=time.getDate();
var year=time.getYear();
var lday=days[time.getDay() + 1];
if (year < 2000)
year = year + 1900;   
return lday +" "+date+" de "+lmonth+" de "+year+ "</center>"
}


function getLongDateEN() {
var days=new Array(7);
days[1]="Sunday";
days[2]="Monday";
days[3]="Tuesday";
days[4]="Wednesday";
days[5]="Thursday";
days[6]="Friday";
days[7]="Saturday";

var months=new Array(13);
months[1]="January";
months[2]="February";
months[3]="March";
months[4]="April";
months[5]="May";
months[6]="June";
months[7]="July";
months[8]="August";
months[9]="September";
months[10]="October";
months[11]="November";
months[12]="December";

var time=new Date();
var lmonth=months[time.getMonth() + 1];
var date=time.getDate();
var year=time.getYear();
var lday=days[time.getDay() + 1];
if (year < 2000)
year = year + 1900;   
return lday +" "+lmonth+"  "+date+" / "+year+ "</center>"
}

function changeContent(serviceID) {
	
	switch (serviceID) {
	case 0:
         document.getElementById("servicioContenido").innerHTML = 'Las p&oacute;lizas de seguro de autos son contratos entre usted y una compa&ntilde;&iacute;a de seguros que lo proteger&iacute;a de p&eacute;rdidas financieras en caso de un accidente. La compa&ntilde;&iacute;a de seguros pagar&iacute;a sus p&eacute;rdidas dependiendo en las coberturas y los deducibles que Usted compre cuando paga el costo de dicha p&oacute;liza. Estos contratos se venden por 6 o 12 meses.<p> Si usted tiene registrado a su nombre un autom&oacute;vil en el Estado de la Florida, es requerido que compre y mantenga una cobertura m&iacute;nima de $10,000 en protecci&oacute;n personal para cubrir sus gastos m&eacute;dicos y $10,000 de da&ntilde;os de propiedad para cubrir la propiedad de terceros que Usted afecte en un accidente en el que ha sido determinado culpable. Sin embargo, es recomendable incrementar la protecci&oacute;n de da&ntilde;os a terceros para que est&eacute; tranquilo que tiene suficiente cobertura en caso de provocar un accidente fatal. <p> Cada p&oacute;liza de seguros de auto est&aacute; compuesta de 6 partes que pueden ser obligatorias u opcionales:<br /> 1) Da&ntilde;os m&eacute;dicos a terceros, para cubrir da&ntilde;os personales provocados a un tercero.<br /> 2) Protecci&oacute;n de da&ntilde;os personales, para cubrir tratamiento m&eacute;dico y perdida de salario al conductor y miembros de su n&uacute;cleo familiar.<br /> 3)Da&ntilde;os de propiedad a terceros: para da&ntilde;os ocasionados a la propiedad de otros siendo declarado culpable del accidente.<br /> 4) Colisi&oacute;n cubre da&ntilde;os a su propio auto ocasionados por una colisi&oacute;n contra otro auto o un objeto fijo que encuentre en el camino como un &aacute;rbol.<br /> 5) Seguro Comprensivo cubre a su auto cuando sufre da&ntilde;os por otro incidente que no sea colisi&oacute;n, como por ejemplo robo, vandalismo, fuego, un objeto volando que le cae, una inundaci&oacute;n, etc.<br /> 6) Cobertura para motoristas no asegurados o asegurados pobremente: esta cobertura est&aacute; dise&ntilde;ada para protegerlo de una colisi&oacute;n contra un peat&oacute;n, un ciclista o un conductor culpable que no estaba suficientemente asegurado.';
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; Auto Privado';
    break;
    case 1:
        document.getElementById("servicioContenido").innerHTML = 'El seguro de protecci&oacute;n a terceros ofrece resguardo a negocios que enfrentan perdidas econ&oacute;micas cuando son presuntamente negligentes por causar da&ntilde;os a la salud, la reputaci&oacute;n o perdidas a la propiedad de otros. Usualmente compensaci&oacute;n por da&ntilde;os causados, costos de defensa o cargos acordados por arreglos en corte son pagos por la compa&ntilde;&iacute;a de seguros cuando una demanda judicial se establece contra el asegurado.<p>  <span class="resalte">Da&ntilde;os Personales</span> La cobertura de da&ntilde;os a terceros puede pagar a la persona o personas afectadas el costo de sus gastos m&eacute;dicos, hospitalizaci&oacute;n, tiempo dejado de trabajar por el incidente e inclusive restituci&oacute;n a  su familia en caso de muerte o discapacidad cuando se encuentra al asegurado responsable por el da&ntilde;o sufrido.<p>  <span class="resalte">Da&ntilde;os a la propiedad </span> En el momento que un negocio es encontrado negligente por causar da&ntilde;os o la perdida de la propiedad de un tercero, esta cobertura va a pagar el valor que ten&iacute;a la propiedad  o el costo para remplazarla a su estado original.<p>  <span class="resalte">Productos y Operaciones terminadas.</span> <p> Una p&oacute;liza puede proveer cobertura para el da&ntilde;o que ocasionen a otros los productos que un asegurado venda  o el servicio que provea. Si un da&ntilde;o ocurre por usar un producto defectuoso o por un trabajo mal realizado por el asegurado, esta cobertura pagar&iacute;a por los da&ntilde;os ocasionados incluyendo los costos de la defensa legal, hasta el l&iacute;mite de la p&oacute;liza. La mayor parte de los negocios necesitan comprar esta cobertura, especialmente  aquellos vinculados al servicio, los contratistas, los fabricantes de productos y los distribuidores sobre todo de productos extranjeros.';
		document.getElementById("servicioTitulo").innerHTML = '&raquo; Da&ntilde;os a terceros general y profesional';
		break;
    case 2:
         document.getElementById("servicioContenido").innerHTML = 'P&oacute;lizas para autos comerciales tienen t&iacute;picamente las mismas 6 partes que los autos privados tienen. Sin embargo, otras coberturas se pueden a&ntilde;adir como cobertura para autos rentados o de no due&ntilde;os para cubrir a empleados sus propios autos para funciones del negocio. Los seguros de camiones son un tipo espec&iacute;fico de seguros de auto comerciales y necesitan seguro para su carga, la cual puede ser ofrecida por la misma u otra compa&ntilde;&iacute;a dependiendo del tipo de carga y la cantidad de seguro que necesite. La mayor parte de las compa&ntilde;&iacute;as ofrecen descuentos por tener seguros para los empleados, seguros de da&ntilde;os a terceros en el negocio, estar operando por m&aacute;s de un a&ntilde;o y por cambiar de una compa&ntilde;&iacute;a a otra sin lapso en cobertura.';
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; Auto Comercial';
	   break;
    case 3:
        document.getElementById("servicioContenido").innerHTML = 'Muchas profesionales como los doctores, abogados y contadores p&uacute;blicos, est&aacute;n obligados por su licencia a comprar seguro profesional. Sin embargo, otros muchos que no est&aacute;n obligados tambi&eacute;n enfrentan el riesgo de una demanda por da&ntilde;os a terceros en el ejercicio de su profesi&oacute;n y su seguro de da&ntilde;os a terceros general no cubrir&iacute;a este riesgo. Inspectores, Preparadores de Impuestos, Agentes de bienes ra&iacute;ces, cart&oacute;grafos, consultantes, administradores de propiedades, pueden ser demandados por p&eacute;rdidas financieras causados por un error profesional o un consejo mal fundamentado. 	Este tipo de seguros se ajusta a cada tipo de profesi&oacute;n y al riesgo particular que se corre. Si usted necesita esta cobertura, por favor contacte nuestra agencia para enviarles la forma espec&iacute;fica que necesita completar con su informaci&oacute;n y obtener una cotizaci&oacute;n.';
        document.getElementById("servicioTitulo").innerHTML = '&raquo; Da&ntilde;os a terceros causados por profesionales';
		break;
    case 4:
        document.getElementById("servicioContenido").innerHTML = 'Las p&oacute;lizas de seguros para due&ntilde;os de casas son generalmente ofrecidas en forma de paquetes. Estos ofrecen la mayor parte de las coberturas que usted necesitar&iacute;a para su casa como compensaci&oacute;n por da&ntilde;os ocurridos durante un fuego, un robo, da&ntilde;os ocasionados	por tuber&iacute;as de agua, huracanes y protecci&oacute;n a terceros. Por favor note que una exclusi&oacute;n com&uacute;n es el seguro por inundaci&oacute;n, para lo cual necesitar&iacute;a comprar una p&oacute;liza diferente.<p> Cuando nos contacte, un agente va a trabajar con usted en determinar cu&aacute;nto costar&iacute;a reconstruir su propiedad en caso de una perdida, para lo cual necesitar&iacute;amos informaci&oacute;n como a&ntilde;o de construcci&oacute;n, si la propiedad ha sido reparada o renovada, y las caracter&iacute;sticas peculiares de su propiedad. Una vez determinada la cobertura necesaria para la estructura principal Cobertura A, las Coberturas B y D las cuales cubren estructuras adicionales y gasto necesarios para vivir mientras repara se calculan como porcientos de la cobertura A. La cobertura C, propiedad personal lo va a compensar por perdidas de sus pertenencias dentro de la casa como los muebles, la ropa, electr&oacute;nicos, electrodom&eacute;sticos  etc. Si usted posee propiedad m&aacute;s cara que la que puede cubrir en este paquete, como joyas o arte, se le recomienda que los asegure en una p&oacute;liza independiente donde le pagar&iacute;an lo que se valore que valga esa propiedad en particular.<p> Las compa&ntilde;&iacute;as de seguro de casa usualmente ofrecen descuento por tener alarma de fuego o robo y cr&eacute;ditos por protegersu casa contra los huracanes y puede ser que necesite ordenar inspecciones para poder obtener estos cr&eacute;ditos. Nuestros agentes le van a guiar en el proceso y le pueden recomendar inspecciones muy profesionales que trabajan con nuestra agencia.'
        document.getElementById("servicioTitulo").innerHTML = '&raquo; Seguros para dueños de casa e inquilinos' 
		break;
    case 5:
         document.getElementById("servicioContenido").innerHTML = 'En el estado de la Florida, el seguro para empleados es requerido para negocios en la industria de la construcci&oacute;n cuando tienen 1 empleado o m&aacute;s, y en el resto de 	 las industrias con 4 empleados o m&aacute;s. Sin embargo, el seguro para empleados es fundamental para negocios de cualquier tama&ntilde;o. El seguro para empleados cubre da&ntilde;os que sufran los empleados mientras est&eacute;n en el trabajo, est&eacute;n en el lugar de operaciones, o en otro lugar siempre que se encuentren trabajando para el negocio. Tambi&eacute;n los cubrir&iacute;a en un accidente automovil&iacute;stico si se est&aacute;n trasladando por cuesti&oacute;n de trabajo. Adem&aacute;s, cubre a los empleados que se enferman con enfermedades relacionadas al trabajo. <p> Las p&oacute;lizas de seguros para empleados siempre es una p&oacute;liza por s&iacute; misma y esta cobertura no puede incluirse en los  paquetes de otros seguros para peque&ntilde;os negocios en nuestro estado. En la Florida, los precios son regulados por  las autoridades estatales y se determina por el salario de cada clasificaci&oacute;n en dependencia del tipo de trabajo  que el empleado realiza. <p>  Los oficiales de las corporaciones pueden excluirse ellos mismos de tener cobertura. Para solicitar una exclusi&oacute;n, visiten el sitio del Estado: <br /><a href="https://apps.fldfs.com/bocexempt/" class="mailint"> https://apps.fldfs.com/bocexempt/</a>'
         document.getElementById("servicioTitulo").innerHTML = '&raquo; Seguros para Empleados' 
		break;
    case 6:
         document.getElementById("servicioContenido").innerHTML = 'Una p&oacute;liza sombrilla es un exceso de cobertura de da&ntilde;os a terceros que se ofrece a due&ntilde;os de casa o de negocios cuando necesitan proteger sus activos contra demandas legales significativas. Casi todas las p&oacute;lizas tienen un l&iacute;mite tope 		   de da&ntilde;os a terceros de $300,000 a $1,000,000, dependiendo del tipo de p&oacute;liza. Si usted tiene propiedad, ahorros o inversiones de m&aacute;s de su l&iacute;mite de seguros, necesita comprar este tipo de p&oacute;liza, la cual es muy econ&oacute;mica y se recomienda para su tranquilidad.'
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; P&oacute;lizas de Exceso de Da&ntilde;os a Terceros'	
		break;
	case 7:
        document.getElementById("servicioContenido").innerHTML = 'Las p&oacute;lizas de seguro de inundaci&oacute;n cubren su casa o negocio de da&ntilde;os causados por agua que se eleva desde afuera. Aunque pudiera ser requerido por los prestatarios en algunas &aacute;reas, los seguros de inundaci&oacute;n tienen que ser comprados separados del seguro de su casa o negocio. Para cotizarle una p&oacute;liza de seguro de inundaci&oacute;n, nuestra agencia necesitar&iacute;a un certificado de elevaci&oacute;n donde se mide su propiedad con respecto a su zona. Ha habido varias inundaciones en el sur de la Florida debido a nuestra geograf&iacute;a, y las perdidas por inundaciones son devastadoras para las estructuras y sus art&iacute;culos personales. Este preparado y compre una p&oacute;liza de seguros de inundaci&oacute;n por un m&oacute;dico precio. Para m&aacute;s informaci&oacute;n y recursos visite el sitio federal: <br /> <a href="https://www.floodsmart.gov/floodsmart/" class="mailint">https://www.floodsmart.gov/floodsmart/</a>'
        document.getElementById("servicioTitulo").innerHTML = '&raquo; Inundaci&oacute;n'
		break;
    case 8:
         document.getElementById("servicioContenido").innerHTML = 'Los Seguros para su propiedad comercial va a cubrir edificios de negocios como almacenes, centros comerciales, edificios de apartamentos, comunidades residenciales, entre otros. Este tipo de p&oacute;liza est&aacute; dise&ntilde;ada para cubrir tanto la estructura del edificio como propiedad dentro de los locales incluyendo inventario, computadoras, muebles de oficinas, perdida por interrupci&oacute;n del negocio, cristales, lum&iacute;nicos, comida que se echa a perder en mercados y restaurantes, hasta propiedad de sus clientes que usted tiene bajo su custodia o control. En la Florida con tanta exposici&oacute;n a huracanes, el seguro de propiedad comercial pudiera ser muy dif&iacute;cil de obtener y las compa&ntilde;&iacute;as de seguros van a considerar la distancia que la estructura esta de la costa, si el edificio esta renovado, si se le realiza mantenimiento regularmente, historial de p&eacute;rdidas que tenga el edificio, antes de poder ofrecerle una cotizaci&oacute;n. Nuestros agentes tienen una vasta experiencia cotizando todos los tipos de propiedades comerciales. Nuestros agentes pueden 		   visitar sus propiedades y reunirse con los due&ntilde;os para reunir la mayor cantidad posible de informaci&oacute;n que permita obtener la mejor cotizaci&oacute;n.'
         document.getElementById("servicioTitulo").innerHTML = '&raquo; Propiedad Comercial'
	   break;
    case 9:
         document.getElementById("servicioContenido").innerHTML = 'Se ofrece sin costo a nuestros clientes de seguros'
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; Notario Público'
		 break;
	} 
}    

function changeContentEN(serviceID) {
	
	switch (serviceID) {
	case 0:
         document.getElementById("servicioContenido").innerHTML = 'Auto insurance policies are contracts between you and an insurance company to protect you against financial loss in the event of an accident. For a premium you pay, the insurance company agrees to pay your losses depending on what coverages, deductibles and limits you purchased. Policies are sold for 6 months or 12 months period to time.<p> If you own and have registered an automobile in the State of Florida, it is required you to purchase a minimum coverage of $10,000 personal injury protection, to cover your medical expenses and $10,000 property damage liability to cover damages to other&apos;s properties if you have at-fault accident. However, it is highly recommended to increase liability limits to provide you with peace of mind.<p>  Every Auto Policy comes with 6 parts that are either mandatory or optional:<br /> 1) Bodily Injury Liability For injuries the policyholder causes to someone else.<br /> 2) Personal Injury Protection (PIP) to cover medical treatment of injuries to the driver and passengers of the policyholder&apos;s car.<br /> 3) Property Damage Liability: For damage the policyholder caused to someone else&apos;s property in at-fault accident.<br /> 4) Collision covers damage to the auto&apos;s owner from a collision. The collision could be with another car or any other fixed object you may find in the way like a tree.<br /> 5) Comprehensive covers policyholder&apos;s car that doesn&apos;t involve a collision example of comprehensive perils could be fire, theft, falling objects, flood, etc.<br /> 6) Uninsured/Underinsured Motorist Coverage is design to cover policyholder&apos;s injuries as a result of collision with an uninsured or at fault driver that did not purchased enough insurance.</td>';
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; Private Auto';
    break;
    case 1:
        document.getElementById("servicioContenido").innerHTML = 'Liability insurance protects businesses against losses faced when they are negligent or liable for damage, injury or loss to third parties&apos; property, health, reputation, or even responsible for causing death. Usually damages, legal defense fees and settlement charges are paid by the insuring company when a lawsuit is filed against the Insured.<p><span class="resalte">Bodily Injury</span> - Liability coverage may pay the affected person for the cost of hospitalization, the loss of services and restitution for death that results from an injury where it has been determined that the insured was liable for such loss.<p><span class="resalte">Property Damage</span> - In the event a business is found negligent or caused damage to, or the loss of use of someone else&apos;s property, property damage coverage may pay for the value of the physical damage to the property; or the loss of use of that property.<p><span class="resalte">Products and Completed Operations.</span><p>A policy may provide coverage for your company&apos;s completed products or services. If an injury occurs due to the use of your products or for a service or operation you conducted, the policy would pay for the resulting damages and any legal expenses up to the policy limits. Most businesses need to carry this main coverage, especially those in the Service industry, contractors, manufacturers and distributors.';
		document.getElementById("servicioTitulo").innerHTML = '&raquo; Commercial General & Professional Liability';
		break;
    case 2:
         document.getElementById("servicioContenido").innerHTML = 'Business Auto policies have typically the same 6 parts private auto do, however, other coverages may be added such as Hired & Non Owned Auto Coverages for employees or other that may driver companies&apos; vehicles. Truckers Insurance is a specific type of business auto and Cargo Coverage may be needed, required and offered by either the same company insuring the truck or a different carrier, depending on the type of cargo. Most Insurance carriers offer discounts for carrying workers&apos; compensation or liability insurance, for being in business over a year, and for switching from company to another.';
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; Business Auto';
	   break;
    case 3:
        document.getElementById("servicioContenido").innerHTML = 'Many professions traditionally require Professional Liability such as doctors, attorneys, accountants, etc. However, there are many others licensed professionals who also face the possibility of a lawsuit and general liability packages do not cover them. Inspectors, Appraisal, Surveyors, Tax Preparers, Property Managers, Consultants, Real Estate Agents and Brokers can be sued for financial losses as a result of a professional mistake. Miscellaneous Professional liability are policies specifically tailored for each licensed professional. Please contact us for the specific supplemental we may need to gather information for a quote.';
        document.getElementById("servicioTitulo").innerHTML = '&raquo; Miscellaneous Professional Liability';
		break;
    case 4:
        document.getElementById("servicioContenido").innerHTML = 'Homeowners insurance policies are generally offered as package policies. They offer most coverages you may need for your house such as fire, theft, water damages, hurricanes, and liability. Please note Flood is a common exclusion in homeowners&apos; policies, you may need a separate policy to cover flood for your dwelling or contents.<p>When you contact our agency, an agent will work with you in establish the replacement cost for your particular dwelling depending upon the year of construction, dwelling characteristics, upgrades, etc. Dwelling limit – Coverage A, will be covering the actual house structure. Coverages B &D will be covering other structures detached from your main dwelling and loss of use, which will allow you to pay additional living expenses while you are reconstructing your house. Coverage C, personal property, will be protecting your belongings including furniture, clothing, electronics, etc. If you own more expensive items like jewelry or art, it is highly recommended to insure those items in a separate inland marine policy where you will get paid the appraised value of the item.<p> Homeowners carriers usually offer burglar and fire alarm discounts, windstorm mitigation credits and you may need to perform Inspections in order to get those credits. Our agents will walk you through the process and we can recommend very professional inspectors that work with our agency.'
        document.getElementById("servicioTitulo").innerHTML = '&raquo; Homeowners, Dwellings & Renters Insurance' 
		break;
    case 5:
         document.getElementById("servicioContenido").innerHTML = 'In the State of Florida Workers Compensation Insurance is required for businesses with 1 or more employees in the Construction Industry and 4 or more employees in non-construction. However, for business of all sizes, workers&apos; compensation is a fundamental coverage to carry. Workers compensation insurance covers workers injured on the job, whether they&apos;re hurt on the workplace premises or elsewhere while working for the business, or in auto accidents while on the clock. It also covers work-related illnesses.<p> Workers Compensation is always a stand-alone policy and coverage for employees cannot be included in a business owner package. In Florida, rates are regulated by State authorities and price is determined by the payroll for each classification or type of job the employee performs.<p>Owners can exempt themselves from coverage. To Apply for a Workers&apos; Compensation Exemption, please visit the State of Florida DWC Division at:<br /><a href="https://apps.fldfs.com/bocexempt/" class="mailint"> https://apps.fldfs.com/bocexempt/</a>'
         document.getElementById("servicioTitulo").innerHTML = '&raquo; Workers Compensation' 
		break;
    case 6:
         document.getElementById("servicioContenido").innerHTML = 'An Umbrella policy is excess liability coverage offered to home or business owners when they need to protect their assets for major liability claims. Most policy packages will have a top liability limit, which it may vary from $300,000 to $1,000,000, depending on the type of policy. If you own property, have investments or just savings worth more than your homeowners, business or auto liability policies, an umbrella would be extremely recommended and it can be very affordable.'
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; Umbrellas'
		break;
	case 7:
        document.getElementById("servicioContenido").innerHTML = 'Flood Policies will cover your house or business against losses due to water arising from the outside. Although it could be mandatory if you are in specific areas, they need to be purchased separately from your homeowners or business owner policies. To quote a flood insurance policy, our agency will need you to purchase an elevation certificate where your house elevation is measured to determine the rate to be used. There has been several flooding in the South Florida area over the years and a flood could cause devastating damages to your buildings, dwellings or personal property. Be prepared and purchase a low cost flood insurance! For more resources on Flood Insurance, visit <a href="https://www.floodsmart.gov/floodsmart/" class="mailint">https://www.floodsmart.gov/floodsmart/</a>'
        document.getElementById("servicioTitulo").innerHTML = '&raquo; Flood'
		break;
    case 8:
         document.getElementById("servicioContenido").innerHTML = 'Commercial Property will cover commercial buildings such as warehouses, shopping centers, apartment buildings, condominiums, etc. This type of policy is design to cover very different types of property from buildings, business personal property including inventory, business interruption, glass, food spoilage in restaurants and supermarkets, to personal property of customers you have under your care, custody and control. In Florida with so much exposure to Hurricanes, commercial property could be difficult to place and insurance companies will be concerned with distance from water, building updates, maintenance of the building, loss history, before offering quotes. Our agents have a vast experience quoting all types of commercial properties. Our field agents may be able to visit your premises to meet with property owners and gather as much information as possible to get an affordable quote.'
         document.getElementById("servicioTitulo").innerHTML = '&raquo; Commercial Property'
	   break;
    case 9:
         document.getElementById("servicioContenido").innerHTML = 'Complimentary to Agency Clients'
		 document.getElementById("servicioTitulo").innerHTML = '&raquo; Notary Public'
		 break;
	} 
}    
 