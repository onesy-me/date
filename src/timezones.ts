
export interface ITimezone {
  label: string;
  code: string;
  name: string;
  abbr?: string;
  utc: string;
}

export const timezones: Array<ITimezone> = [
  {
    label: 'Pacific/Midway (GMT-11:00)',
    code: 'Pacific/Midway',
    name: '(GMT-11:00) Midway',
    utc: '-11:00',
    abbr: 'SST'
  },
  {
    label: 'Pacific/Niue (GMT-11:00)',
    code: 'Pacific/Niue',
    name: '(GMT-11:00) Alofi',
    utc: '-11:00',
    abbr: '-11'
  },
  {
    label: 'Pacific/Pago_Pago (GMT-11:00)',
    code: 'Pacific/Pago_Pago',
    name: '(GMT-11:00) Pago Pago, Tāfuna, Ta`ū, Taulaga',
    utc: '-11:00',
    abbr: 'SST'
  },
  {
    label: 'America/Adak (GMT-10:00)',
    code: 'America/Adak',
    name: '(GMT-10:00) Adak',
    utc: '-10:00',
    abbr: 'HST'
  },
  {
    label: 'Pacific/Honolulu (GMT-10:00)',
    code: 'Pacific/Honolulu',
    name: '(GMT-10:00) Honolulu, East Honolulu, Pearl City, Hilo, Kailua',
    utc: '-10:00',
    abbr: 'HST'
  },
  {
    label: 'Pacific/Rarotonga (GMT-10:00)',
    code: 'Pacific/Rarotonga',
    name: '(GMT-10:00) Avarua',
    utc: '-10:00',
    abbr: '-10'
  },
  {
    label: 'Pacific/Tahiti (GMT-10:00)',
    code: 'Pacific/Tahiti',
    name: '(GMT-10:00) Faaa, Papeete, Punaauia, Pirae, Mahina',
    utc: '-10:00',
    abbr: '-10'
  },
  {
    label: 'Pacific/Marquesas (GMT-09:30)',
    code: 'Pacific/Marquesas',
    name: '(GMT-09:30) Taiohae',
    utc: '-09:30',
    abbr: '-0930'
  },
  {
    label: 'America/Anchorage (GMT-09:00)',
    code: 'America/Anchorage',
    name: '(GMT-09:00) Anchorage, Fairbanks, Eagle River, Badger, Knik-Fairview',
    utc: '-09:00',
    abbr: 'AKST'
  },
  {
    label: 'America/Juneau (GMT-09:00)',
    code: 'America/Juneau',
    name: '(GMT-09:00) Juneau',
    utc: '-09:00',
    abbr: 'AKST'
  },
  {
    label: 'America/Metlakatla (GMT-09:00)',
    code: 'America/Metlakatla',
    name: '(GMT-09:00) Metlakatla',
    utc: '-09:00',
    abbr: 'AKST'
  },
  {
    label: 'America/Nome (GMT-09:00)',
    code: 'America/Nome',
    name: '(GMT-09:00) Nome',
    utc: '-09:00',
    abbr: 'AKST'
  },
  {
    label: 'America/Sitka (GMT-09:00)',
    code: 'America/Sitka',
    name: '(GMT-09:00) Sitka, Ketchikan',
    utc: '-09:00',
    abbr: 'AKST'
  },
  {
    label: 'America/Yakutat (GMT-09:00)',
    code: 'America/Yakutat',
    name: '(GMT-09:00) Yakutat',
    utc: '-09:00',
    abbr: 'AKST'
  },
  {
    label: 'Pacific/Gambier (GMT-09:00)',
    code: 'Pacific/Gambier',
    name: '(GMT-09:00) Gambier',
    utc: '-09:00',
    abbr: '-09'
  },
  {
    label: 'America/Los_Angeles (GMT-08:00)',
    code: 'America/Los_Angeles',
    name: '(GMT-08:00) Los Angeles, San Diego, San Jose, San Francisco, Seattle',
    utc: '-08:00',
    abbr: 'PST'
  },
  {
    label: 'America/Tijuana (GMT-08:00)',
    code: 'America/Tijuana',
    name: '(GMT-08:00) Tijuana, Mexicali, Ensenada, Rosarito, Tecate',
    utc: '-08:00',
    abbr: 'PST'
  },
  {
    label: 'America/Vancouver (GMT-08:00)',
    code: 'America/Vancouver',
    name: '(GMT-08:00) Vancouver, Surrey, Okanagan, Victoria, Burnaby',
    utc: '-08:00',
    abbr: 'PST'
  },
  {
    label: 'Pacific/Pitcairn (GMT-08:00)',
    code: 'Pacific/Pitcairn',
    name: '(GMT-08:00) Adamstown',
    utc: '-08:00',
    abbr: '-08'
  },
  {
    label: 'America/Boise (GMT-07:00)',
    code: 'America/Boise',
    name: '(GMT-07:00) Boise, Meridian, Nampa, Idaho Falls, Pocatello',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Cambridge_Bay (GMT-07:00)',
    code: 'America/Cambridge_Bay',
    name: '(GMT-07:00) Cambridge Bay',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Chihuahua (GMT-07:00)',
    code: 'America/Chihuahua',
    name: '(GMT-07:00) Chihuahua, Ciudad Delicias, Cuauhtémoc, Parral, Nuevo Casas Grandes',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Creston (GMT-07:00)',
    code: 'America/Creston',
    name: '(GMT-07:00) Creston',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Dawson (GMT-07:00)',
    code: 'America/Dawson',
    name: '(GMT-07:00) Dawson',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Dawson_Creek (GMT-07:00)',
    code: 'America/Dawson_Creek',
    name: '(GMT-07:00) Fort St. John, Dawson Creek',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Denver (GMT-07:00)',
    code: 'America/Denver',
    name: '(GMT-07:00) Denver, El Paso, Albuquerque, Colorado Springs, Aurora',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Edmonton (GMT-07:00)',
    code: 'America/Edmonton',
    name: '(GMT-07:00) Calgary, Edmonton, Fort McMurray, Red Deer, Lethbridge',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Fort_Nelson (GMT-07:00)',
    code: 'America/Fort_Nelson',
    name: '(GMT-07:00) Fort Nelson',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Hermosillo (GMT-07:00)',
    code: 'America/Hermosillo',
    name: '(GMT-07:00) Hermosillo, Ciudad Obregón, Nogales, San Luis Río Colorado, Navojoa',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Inuvik (GMT-07:00)',
    code: 'America/Inuvik',
    name: '(GMT-07:00) Inuvik',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Mazatlan (GMT-07:00)',
    code: 'America/Mazatlan',
    name: '(GMT-07:00) Culiacán, Mazatlán, Tepic, Los Mochis, La Paz',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Ojinaga (GMT-07:00)',
    code: 'America/Ojinaga',
    name: '(GMT-07:00) Ciudad Juárez, Manuel Ojinaga, Ojinaga',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Phoenix (GMT-07:00)',
    code: 'America/Phoenix',
    name: '(GMT-07:00) Phoenix, Tucson, Mesa, Chandler, Gilbert',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Whitehorse (GMT-07:00)',
    code: 'America/Whitehorse',
    name: '(GMT-07:00) Whitehorse',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Yellowknife (GMT-07:00)',
    code: 'America/Yellowknife',
    name: '(GMT-07:00) Yellowknife',
    utc: '-07:00',
    abbr: 'MST'
  },
  {
    label: 'America/Bahia_Banderas (GMT-06:00)',
    code: 'America/Bahia_Banderas',
    name: '(GMT-06:00) Mezcales, San Vicente, Bucerías, Valle de Banderas',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Belize (GMT-06:00)',
    code: 'America/Belize',
    name: '(GMT-06:00) Belize City, San Ignacio, Orange Walk, Belmopan, Dangriga',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Chicago (GMT-06:00)',
    code: 'America/Chicago',
    name: '(GMT-06:00) Chicago, Houston, San Antonio, Dallas, Austin',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Costa_Rica (GMT-06:00)',
    code: 'America/Costa_Rica',
    name: '(GMT-06:00) San José, Limón, San Francisco, Alajuela, Liberia',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/El_Salvador (GMT-06:00)',
    code: 'America/El_Salvador',
    name: '(GMT-06:00) San Salvador, Soyapango, Santa Ana, San Miguel, Mejicanos',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Guatemala (GMT-06:00)',
    code: 'America/Guatemala',
    name: '(GMT-06:00) Guatemala City, Mixco, Villa Nueva, Petapa, San Juan Sacatepéquez',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Indiana/Knox (GMT-06:00)',
    code: 'America/Indiana/Knox',
    name: '(GMT-06:00) Knox',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Indiana/Tell_City (GMT-06:00)',
    code: 'America/Indiana/Tell_City',
    name: '(GMT-06:00) Tell City',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Managua (GMT-06:00)',
    code: 'America/Managua',
    name: '(GMT-06:00) Managua, León, Masaya, Chinandega, Matagalpa',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Matamoros (GMT-06:00)',
    code: 'America/Matamoros',
    name: '(GMT-06:00) Reynosa, Heroica Matamoros, Nuevo Laredo, Piedras Negras, Ciudad Acuña',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Menominee (GMT-06:00)',
    code: 'America/Menominee',
    name: '(GMT-06:00) Menominee, Iron Mountain, Kingsford, Ironwood, Iron River',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Merida (GMT-06:00)',
    code: 'America/Merida',
    name: '(GMT-06:00) Mérida, Campeche, Ciudad del Carmen, Kanasín, Valladolid',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Mexico_City (GMT-06:00)',
    code: 'America/Mexico_City',
    name: '(GMT-06:00) Mexico City, Iztapalapa, Ecatepec de Morelos, Guadalajara, Puebla',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Monterrey (GMT-06:00)',
    code: 'America/Monterrey',
    name: '(GMT-06:00) Monterrey, Saltillo, Guadalupe, Torreón, Victoria de Durango',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/North_Dakota/Beulah (GMT-06:00)',
    code: 'America/North_Dakota/Beulah',
    name: '(GMT-06:00) Beulah',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/North_Dakota/Center (GMT-06:00)',
    code: 'America/North_Dakota/Center',
    name: '(GMT-06:00) Center',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/North_Dakota/New_Salem (GMT-06:00)',
    code: 'America/North_Dakota/New_Salem',
    name: '(GMT-06:00) Mandan',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Rainy_River (GMT-06:00)',
    code: 'America/Rainy_River',
    name: '(GMT-06:00) Rainy River',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Rankin_Inlet (GMT-06:00)',
    code: 'America/Rankin_Inlet',
    name: '(GMT-06:00) Rankin Inlet',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Regina (GMT-06:00)',
    code: 'America/Regina',
    name: '(GMT-06:00) Saskatoon, Regina, Prince Albert, Moose Jaw, North Battleford',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Resolute (GMT-06:00)',
    code: 'America/Resolute',
    name: '(GMT-06:00) Resolute',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Swift_Current (GMT-06:00)',
    code: 'America/Swift_Current',
    name: '(GMT-06:00) Swift Current',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Tegucigalpa (GMT-06:00)',
    code: 'America/Tegucigalpa',
    name: '(GMT-06:00) Tegucigalpa, San Pedro Sula, Choloma, La Ceiba, El Progreso',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'America/Winnipeg (GMT-06:00)',
    code: 'America/Winnipeg',
    name: '(GMT-06:00) Winnipeg, Brandon, Kenora, Portage la Prairie, Thompson',
    utc: '-06:00',
    abbr: 'CST'
  },
  {
    label: 'Pacific/Easter (GMT-06:00)',
    code: 'Pacific/Easter',
    name: '(GMT-06:00) Easter',
    utc: '-06:00',
    abbr: '-05'
  },
  {
    label: 'Pacific/Galapagos (GMT-06:00)',
    code: 'Pacific/Galapagos',
    name: '(GMT-06:00) Puerto Ayora, Puerto Baquerizo Moreno',
    utc: '-06:00',
    abbr: '-06'
  },
  {
    label: 'America/Atikokan (GMT-05:00)',
    code: 'America/Atikokan',
    name: '(GMT-05:00) Atikokan',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Bogota (GMT-05:00)',
    code: 'America/Bogota',
    name: '(GMT-05:00) Bogotá, Cali, Medellín, Barranquilla, Cartagena',
    utc: '-05:00',
    abbr: '-05'
  },
  {
    label: 'America/Cancun (GMT-05:00)',
    code: 'America/Cancun',
    name: '(GMT-05:00) Cancún, Chetumal, Playa del Carmen, Cozumel, Felipe Carrillo Puerto',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Cayman (GMT-05:00)',
    code: 'America/Cayman',
    name: '(GMT-05:00) George Town, West Bay, Bodden Town, East End, North Side',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Detroit (GMT-05:00)',
    code: 'America/Detroit',
    name: '(GMT-05:00) Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Eirunepe (GMT-05:00)',
    code: 'America/Eirunepe',
    name: '(GMT-05:00) Eirunepé, Benjamin Constant, Envira',
    utc: '-05:00',
    abbr: '-05'
  },
  {
    label: 'America/Grand_Turk (GMT-05:00)',
    code: 'America/Grand_Turk',
    name: '(GMT-05:00) Cockburn Town',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Guayaquil (GMT-05:00)',
    code: 'America/Guayaquil',
    name: '(GMT-05:00) Guayaquil, Quito, Cuenca, Santo Domingo de los Colorados, Machala',
    utc: '-05:00',
    abbr: '-05'
  },
  {
    label: 'America/Havana (GMT-05:00)',
    code: 'America/Havana',
    name: '(GMT-05:00) Havana, Santiago de Cuba, Camagüey, Holguín, Guantánamo',
    utc: '-05:00',
    abbr: 'CST'
  },
  {
    label: 'America/Indiana/Indianapolis (GMT-05:00)',
    code: 'America/Indiana/Indianapolis',
    name: '(GMT-05:00) Indianapolis, Fort Wayne, South Bend, Carmel, Bloomington',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Indiana/Marengo (GMT-05:00)',
    code: 'America/Indiana/Marengo',
    name: '(GMT-05:00) Marengo',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Indiana/Petersburg (GMT-05:00)',
    code: 'America/Indiana/Petersburg',
    name: '(GMT-05:00) Petersburg',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Indiana/Vevay (GMT-05:00)',
    code: 'America/Indiana/Vevay',
    name: '(GMT-05:00) Vevay',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Indiana/Vincennes (GMT-05:00)',
    code: 'America/Indiana/Vincennes',
    name: '(GMT-05:00) Vincennes, Jasper, Washington, Huntingburg',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Indiana/Winamac (GMT-05:00)',
    code: 'America/Indiana/Winamac',
    name: '(GMT-05:00) Winamac',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Iqaluit (GMT-05:00)',
    code: 'America/Iqaluit',
    name: '(GMT-05:00) Iqaluit',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Jamaica (GMT-05:00)',
    code: 'America/Jamaica',
    name: '(GMT-05:00) Kingston, New Kingston, Spanish Town, Portmore, Montego Bay',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Kentucky/Louisville (GMT-05:00)',
    code: 'America/Kentucky/Louisville',
    name: '(GMT-05:00) Louisville, Jeffersonville, New Albany, Jeffersontown, Pleasure Ridge Park',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Kentucky/Monticello (GMT-05:00)',
    code: 'America/Kentucky/Monticello',
    name: '(GMT-05:00) Monticello',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Lima (GMT-05:00)',
    code: 'America/Lima',
    name: '(GMT-05:00) Lima, Arequipa, Callao, Trujillo, Chiclayo',
    utc: '-05:00',
    abbr: '-05'
  },
  {
    label: 'America/Nassau (GMT-05:00)',
    code: 'America/Nassau',
    name: `(GMT-05:00) Nassau, Lucaya, Freeport, West End, Cooper's Town`,
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/New_York (GMT-05:00)',
    code: 'America/New_York',
    name: '(GMT-05:00) New York City, Brooklyn, Queens, Philadelphia, Manhattan',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Nipigon (GMT-05:00)',
    code: 'America/Nipigon',
    name: '(GMT-05:00) Nipigon',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Panama (GMT-05:00)',
    code: 'America/Panama',
    name: '(GMT-05:00) Panamá, San Miguelito, Juan Díaz, David, Arraiján',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Pangnirtung (GMT-05:00)',
    code: 'America/Pangnirtung',
    name: '(GMT-05:00) Pangnirtung',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Port-au-Prince (GMT-05:00)',
    code: 'America/Port-au-Prince',
    name: '(GMT-05:00) Port-au-Prince, Carrefour, Delmas 73, Pétionville, Port-de-Paix',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Rio_Branco (GMT-05:00)',
    code: 'America/Rio_Branco',
    name: '(GMT-05:00) Rio Branco, Cruzeiro do Sul, Sena Madureira, Tarauacá, Feijó',
    utc: '-05:00',
    abbr: '-05'
  },
  {
    label: 'America/Thunder_Bay (GMT-05:00)',
    code: 'America/Thunder_Bay',
    name: '(GMT-05:00) Thunder Bay',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Toronto (GMT-05:00)',
    code: 'America/Toronto',
    name: '(GMT-05:00) Toronto, Montréal, Ottawa, Mississauga, Québec',
    utc: '-05:00',
    abbr: 'EST'
  },
  {
    label: 'America/Anguillal (GMT-04:00)',
    code: 'America/Anguilla',
    name: '(GMT-04:00) The Valley, Blowing Point Village, Sandy Ground Village, The Quarter, Sandy Hill',
    utc: '-04:00',
    abbr: ''
  },
  {
    label: 'America/Antigua (GMT-04:00)',
    code: 'America/Antigua',
    name: `(GMT-04:00) Saint John's, Piggotts, Bolands, Codrington, Parham`,
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Aruba (GMT-04:00)',
    code: 'America/Aruba',
    name: '(GMT-04:00) Oranjestad, Tanki Leendert, San Nicolas, Santa Cruz, Paradera',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Asuncion (GMT-04:00)',
    code: 'America/Asuncion',
    name: '(GMT-04:00) Asunción, Ciudad del Este, San Lorenzo, Capiatá, Lambaré',
    utc: '-04:00',
    abbr: '-03'
  },
  {
    label: 'America/Barbados (GMT-04:00)',
    code: 'America/Barbados',
    name: '(GMT-04:00) Bridgetown, Speightstown, Oistins, Bathsheba, Holetown',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Blanc-Sablon (GMT-04:00)',
    code: 'America/Blanc-Sablon',
    name: '(GMT-04:00) Lévis',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Boa_Vista (GMT-04:00)',
    code: 'America/Boa_Vista',
    name: '(GMT-04:00) Boa Vista',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Campo_Grande (GMT-04:00)',
    code: 'America/Campo_Grande',
    name: '(GMT-04:00) Campo Grande, Dourados, Corumbá, Três Lagoas, Ponta Porã',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Caracas (GMT-04:00)',
    code: 'America/Caracas',
    name: '(GMT-04:00) Caracas, Maracaibo, Maracay, Valencia, Barquisimeto',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Cuiaba (GMT-04:00)',
    code: 'America/Cuiaba',
    name: '(GMT-04:00) Cuiabá, Várzea Grande, Rondonópolis, Sinop, Barra do Garças',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Curacao (GMT-04:00)',
    code: 'America/Curacao',
    name: '(GMT-04:00) Willemstad, Sint Michiel Liber',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Dominica (GMT-04:00)',
    code: 'America/Dominica',
    name: '(GMT-04:00) Roseau, Portsmouth, Berekua, Saint Joseph, Wesley',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Glace_Bay (GMT-04:00)',
    code: 'America/Glace_Bay',
    name: '(GMT-04:00) Sydney, Glace Bay, Sydney Mines',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Goose_Bay (GMT-04:00)',
    code: 'America/Goose_Bay',
    name: '(GMT-04:00) Labrador City, Happy Valley-Goose Bay',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Grenada (GMT-04:00)',
    code: 'America/Grenada',
    name: `(GMT-04:00) Saint George's, Gouyave, Grenville, Victoria, Saint David's`,
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Guadeloupe (GMT-04:00)',
    code: 'America/Guadeloupe',
    name: '(GMT-04:00) Les Abymes, Baie-Mahault, Le Gosier, Petit-Bourg, Sainte-Anne',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Guyana (GMT-04:00)',
    code: 'America/Guyana',
    name: '(GMT-04:00) Georgetown, Linden, New Amsterdam, Anna Regina, Bartica',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Halifax (GMT-04:00)',
    code: 'America/Halifax',
    name: '(GMT-04:00) Halifax, Dartmouth, Charlottetown, Lower Sackville, Truro',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Kralendijk (GMT-04:00)',
    code: 'America/Kralendijk',
    name: '(GMT-04:00) Kralendijk, Oranjestad, The Bottom',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/La_Paz (GMT-04:00)',
    code: 'America/La_Paz',
    name: '(GMT-04:00) Santa Cruz de la Sierra, Cochabamba, La Paz, Sucre, Oruro',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Lower_Princes (GMT-04:00)',
    code: 'America/Lower_Princes',
    name: `(GMT-04:00) Cul de Sac, Lower Prince's Quarter, Koolbaai, Philipsburg`,
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Manaus (GMT-04:00)',
    code: 'America/Manaus',
    name: '(GMT-04:00) Manaus, Itacoatiara, Parintins, Manacapuru, Coari',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Marigot (GMT-04:00)',
    code: 'America/Marigot',
    name: '(GMT-04:00) Marigot',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Martinique (GMT-04:00)',
    code: 'America/Martinique',
    name: '(GMT-04:00) Fort-de-France, Le Lamentin, Le Robert, Sainte-Marie, Le François',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Moncton (GMT-04:00)',
    code: 'America/Moncton',
    name: '(GMT-04:00) Moncton, Saint John, Fredericton, Dieppe, Miramichi',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Montserrat (GMT-04:00)',
    code: 'America/Montserrat',
    name: '(GMT-04:00) Brades, Saint Peters, Plymouth',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Porto_Velho (GMT-04:00)',
    code: 'America/Porto_Velho',
    name: '(GMT-04:00) Porto Velho, Ji Paraná, Vilhena, Ariquemes, Cacoal',
    utc: '-04:00',
    abbr: '-04'
  },
  {
    label: 'America/Port_of_Spain (GMT-04:00)',
    code: 'America/Port_of_Spain',
    name: '(GMT-04:00) Chaguanas, Mon Repos, San Fernando, Port of Spain, Rio Claro',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Puerto_Rico (GMT-04:00)',
    code: 'America/Puerto_Rico',
    name: '(GMT-04:00) San Juan, Bayamón, Carolina, Ponce, Caguas',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Santiago (GMT-04:00)',
    code: 'America/Santiago',
    name: '(GMT-04:00) Santiago, Puente Alto, Antofagasta, Viña del Mar, Valparaíso',
    utc: '-04:00',
    abbr: '-03'
  },
  {
    label: 'America/Santo_Domingo (GMT-04:00)',
    code: 'America/Santo_Domingo',
    name: '(GMT-04:00) Santo Domingo, Santiago de los Caballeros, Santo Domingo Oeste, Santo Domingo Este, San Pedro de Macorís',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/St_Barthelemy (GMT-04:00)',
    code: 'America/St_Barthelemy',
    name: '(GMT-04:00) Gustavia',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/St_Kitts (GMT-04:00)',
    code: 'America/St_Kitts',
    name: `(GMT-04:00) Basseterre, Fig Tree, Market Shop, Saint Paul's, Middle Island`,
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/St_Lucia (GMT-04:00)',
    code: 'America/St_Lucia',
    name: '(GMT-04:00) Castries, Bisee, Vieux Fort, Micoud, Soufrière',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/St_Thomas (GMT-04:00)',
    code: 'America/St_Thomas',
    name: '(GMT-04:00) Saint Croix, Charlotte Amalie, Cruz Bay',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/St_Vincent (GMT-04:00)',
    code: 'America/St_Vincent',
    name: '(GMT-04:00) Kingstown, Kingstown Park, Georgetown, Barrouallie, Port Elizabeth',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Thule (GMT-04:00)',
    code: 'America/Thule',
    name: '(GMT-04:00) Thule',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/Tortola (GMT-04:00)',
    code: 'America/Tortola',
    name: '(GMT-04:00) Road Town',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'Atlantic/Bermuda (GMT-04:00)',
    code: 'Atlantic/Bermuda',
    name: '(GMT-04:00) Hamilton',
    utc: '-04:00',
    abbr: 'AST'
  },
  {
    label: 'America/St_Johns (GMT-03:30)',
    code: 'America/St_Johns',
    name: `(GMT-03:30) St. John's, Mount Pearl, Corner Brook, Conception Bay South, Bay Roberts`,
    utc: '-03:30',
    abbr: 'NST'
  },
  {
    label: 'America/Araguaina (GMT-03:00)',
    code: 'America/Araguaina',
    name: '(GMT-03:00) Palmas, Araguaína, Gurupi, Miracema do Tocantins, Porto Franco',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Buenos_Aires (GMT-03:00)',
    code: 'America/Argentina/Buenos_Aires',
    name: '(GMT-03:00) Buenos Aires, La Plata, Mar del Plata, Morón, Bahía Blanca',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Catamarca (GMT-03:00)',
    code: 'America/Argentina/Catamarca',
    name: '(GMT-03:00) San Fernando del Valle de Catamarca, Trelew, Puerto Madryn, Esquel, Rawson',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Cordoba (GMT-03:00)',
    code: 'America/Argentina/Cordoba',
    name: '(GMT-03:00) Córdoba, Rosario, Santa Fe, Resistencia, Santiago del Estero',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Jujuy (GMT-03:00)',
    code: 'America/Argentina/Jujuy',
    name: '(GMT-03:00) San Salvador de Jujuy, San Pedro de Jujuy, Libertador General San Martín, Palpalá, La Quiaca',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/La_Rioja (GMT-03:00)',
    code: 'America/Argentina/La_Rioja',
    name: '(GMT-03:00) La Rioja, Chilecito, Arauco, Chamical',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Mendoza (GMT-03:00)',
    code: 'America/Argentina/Mendoza',
    name: '(GMT-03:00) Mendoza, San Rafael, San Martín',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Rio_Gallegos (GMT-03:00)',
    code: 'America/Argentina/Rio_Gallegos',
    name: '(GMT-03:00) Comodoro Rivadavia, Río Gallegos, Caleta Olivia, Pico Truncado, Puerto Deseado',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Salta (GMT-03:00)',
    code: 'America/Argentina/Salta',
    name: '(GMT-03:00) Salta, Neuquén, Santa Rosa, San Carlos de Bariloche, Cipolletti',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/San_Juan (GMT-03:00)',
    code: 'America/Argentina/San_Juan',
    name: '(GMT-03:00) San Juan, Chimbas, Santa Lucía, Pocito, Caucete',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/San_Luis (GMT-03:00)',
    code: 'America/Argentina/San_Luis',
    name: '(GMT-03:00) San Luis, Villa Mercedes, La Punta, Merlo, Justo Daract',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Tucuman (GMT-03:00)',
    code: 'America/Argentina/Tucuman',
    name: '(GMT-03:00) San Miguel de Tucumán, Yerba Buena, Tafí Viejo, Alderetes, Aguilares',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Argentina/Ushuaia (GMT-03:00)',
    code: 'America/Argentina/Ushuaia',
    name: '(GMT-03:00) Ushuaia, Río Grande',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Bahia (GMT-03:00)',
    code: 'America/Bahia',
    name: '(GMT-03:00) Salvador, Feira de Santana, Vitória da Conquista, Itabuna, Camaçari',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Belem (GMT-03:00)',
    code: 'America/Belem',
    name: '(GMT-03:00) Belém, Ananindeua, Macapá, Parauapebas, Marabá',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Cayenne (GMT-03:00)',
    code: 'America/Cayenne',
    name: '(GMT-03:00) Cayenne, Matoury, Saint-Laurent-du-Maroni, Kourou, Rémire-Montjoly',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Fortaleza (GMT-03:00)',
    code: 'America/Fortaleza',
    name: '(GMT-03:00) Fortaleza, São Luís, Natal, Teresina, João Pessoa',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Godthab (GMT-03:00)',
    code: 'America/Godthab',
    name: '(GMT-03:00) Nuuk, Sisimiut, Ilulissat, Qaqortoq, Aasiaat',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Maceio (GMT-03:00)',
    code: 'America/Maceio',
    name: '(GMT-03:00) Maceió, Aracaju, Arapiraca, Nossa Senhora do Socorro, São Cristóvão',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Miquelon (GMT-03:00)',
    code: 'America/Miquelon',
    name: '(GMT-03:00) Saint-Pierre, Miquelon',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Montevideo (GMT-03:00)',
    code: 'America/Montevideo',
    name: '(GMT-03:00) Montevideo, Salto, Paysandú, Las Piedras, Rivera',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Paramaribo (GMT-03:00)',
    code: 'America/Paramaribo',
    name: '(GMT-03:00) Paramaribo, Lelydorp, Brokopondo, Nieuw Nickerie, Moengo',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Punta_Arenas (GMT-03:00)',
    code: 'America/Punta_Arenas',
    name: '(GMT-03:00) Punta Arenas, Puerto Natales',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Recife (GMT-03:00)',
    code: 'America/Recife',
    name: '(GMT-03:00) Recife, Jaboatão, Jaboatão dos Guararapes, Olinda, Paulista',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Santarem (GMT-03:00)',
    code: 'America/Santarem',
    name: '(GMT-03:00) Santarém, Altamira, Itaituba, Oriximiná, Alenquer',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Sao_Paulo (GMT-03:00)',
    code: 'America/Sao_Paulo',
    name: '(GMT-03:00) São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'Antarctica/Palmer (GMT-03:00)',
    code: 'Antarctica/Palmer',
    name: '(GMT-03:00) Palmer',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'Antarctica/Rothera (GMT-03:00)',
    code: 'Antarctica/Rothera',
    name: '(GMT-03:00) Rothera',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'Atlantic/Stanley (GMT-03:00)',
    code: 'Atlantic/Stanley',
    name: '(GMT-03:00) Stanley',
    utc: '-03:00',
    abbr: '-03'
  },
  {
    label: 'America/Noronha (GMT-02:00)',
    code: 'America/Noronha',
    name: '(GMT-02:00) Itamaracá',
    utc: '-02:00',
    abbr: '-02'
  },
  {
    label: 'Atlantic/South_Georgia (GMT-02:00)',
    code: 'Atlantic/South_Georgia',
    name: '(GMT-02:00) Grytviken',
    utc: '-02:00',
    abbr: '-02'
  },
  {
    label: 'America/Scoresbysund (GMT-01:00)',
    code: 'America/Scoresbysund',
    name: '(GMT-01:00) Scoresbysund',
    utc: '-01:00',
    abbr: '-01'
  },
  {
    label: 'Atlantic/Azores (GMT-01:00)',
    code: 'Atlantic/Azores',
    name: '(GMT-01:00) Ponta Delgada, Lagoa, Angra do Heroísmo, Rosto de Cão, Rabo de Peixe',
    utc: '-01:00',
    abbr: '-01'
  },
  {
    label: 'Atlantic/Cape_Verde (GMT-01:00)',
    code: 'Atlantic/Cape_Verde',
    name: '(GMT-01:00) Praia, Mindelo, Santa Maria, Cova Figueira, Santa Cruz',
    utc: '-01:00',
    abbr: '-01'
  },
  {
    label: 'Africa/Abidjan (GMT+00:00)',
    code: 'Africa/Abidjan',
    name: '(GMT+00:00) Abidjan, Abobo, Bouaké, Daloa, San-Pédro',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Accra (GMT+00:00)',
    code: 'Africa/Accra',
    name: '(GMT+00:00) Accra, Kumasi, Tamale, Takoradi, Atsiaman',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Bamako (GMT+00:00)',
    code: 'Africa/Bamako',
    name: '(GMT+00:00) Bamako, Sikasso, Mopti, Koutiala, Ségou',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Banjul (GMT+00:00)',
    code: 'Africa/Banjul',
    name: '(GMT+00:00) Serekunda, Brikama, Bakau, Banjul, Farafenni',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Bissau (GMT+00:00)',
    code: 'Africa/Bissau',
    name: '(GMT+00:00) Bissau, Bafatá, Gabú, Bissorã, Bolama',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Casablanca (GMT+00:00)',
    code: 'Africa/Casablanca',
    name: '(GMT+00:00) Casablanca, Rabat, Fès, Sale, Marrakesh',
    utc: '+00:00',
    abbr: '+01'
  },
  {
    label: 'Africa/Conakry (GMT+00:00)',
    code: 'Africa/Conakry',
    name: '(GMT+00:00) Camayenne, Conakry, Nzérékoré, Kindia, Kankan',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Dakar (GMT+00:00)',
    code: 'Africa/Dakar',
    name: '(GMT+00:00) Dakar, Pikine, Touba, Thiès, Thiès Nones',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/El_Aaiun (GMT+00:00)',
    code: 'Africa/El_Aaiun',
    name: '(GMT+00:00) Laayoune, Dakhla, Laayoune Plage',
    utc: '+00:00',
    abbr: '+01'
  },
  {
    label: 'Africa/Freetown (GMT+00:00)',
    code: 'Africa/Freetown',
    name: '(GMT+00:00) Freetown, Bo, Kenema, Koidu, Makeni',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Lome (GMT+00:00)',
    code: 'Africa/Lome',
    name: '(GMT+00:00) Lomé, Sokodé, Kara, Atakpamé, Kpalimé',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Monrovia (GMT+00:00)',
    code: 'Africa/Monrovia',
    name: '(GMT+00:00) Monrovia, Gbarnga, Kakata, Bensonville, Harper',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Nouakchott (GMT+00:00)',
    code: 'Africa/Nouakchott',
    name: '(GMT+00:00) Nouakchott, Nouadhibou, Néma, Kaédi, Rosso',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Ouagadougou (GMT+00:00)',
    code: 'Africa/Ouagadougou',
    name: '(GMT+00:00) Ouagadougou, Bobo-Dioulasso, Koudougou, Ouahigouya, Banfora',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Sao_Tome (GMT+00:00)',
    code: 'Africa/Sao_Tome',
    name: '(GMT+00:00) São Tomé, Santo António',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'America/Danmarkshavn (GMT+00:00)',
    code: 'America/Danmarkshavn',
    name: '(GMT+00:00) Danmarkshavn',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Antarctica/Troll (GMT+00:00)',
    code: 'Antarctica/Troll',
    name: '(GMT+00:00) Troll',
    utc: '+00:00',
    abbr: '+00'
  },
  {
    label: 'Atlantic/Canary (GMT+00:00)',
    code: 'Atlantic/Canary',
    name: '(GMT+00:00) Las Palmas de Gran Canaria, Santa Cruz de Tenerife, La Laguna, Telde, Arona',
    utc: '+00:00',
    abbr: 'WET'
  },
  {
    label: 'Atlantic/Faroe (GMT+00:00)',
    code: 'Atlantic/Faroe',
    name: '(GMT+00:00) Tórshavn, Klaksvík, Fuglafjørður, Tvøroyri, Miðvágur',
    utc: '+00:00',
    abbr: 'WET'
  },
  {
    label: 'Atlantic/Madeira (GMT+00:00)',
    code: 'Atlantic/Madeira',
    name: '(GMT+00:00) Funchal, Câmara de Lobos, São Martinho, Caniço, Machico',
    utc: '+00:00',
    abbr: 'WET'
  },
  {
    label: 'Atlantic/Reykjavik (GMT+00:00)',
    code: 'Atlantic/Reykjavik',
    name: '(GMT+00:00) Reykjavík, Kópavogur, Hafnarfjörður, Akureyri, Garðabær',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Atlantic/St_Helena (GMT+00:00)',
    code: 'Atlantic/St_Helena',
    name: '(GMT+00:00) Jamestown, Georgetown, Edinburgh of the Seven Seas',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Europe/Dublin (GMT+00:00)',
    code: 'Europe/Dublin',
    name: '(GMT+00:00) Dublin, Cork, Luimneach, Gaillimh, Tallaght',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Europe/Guernsey (GMT+00:00)',
    code: 'Europe/Guernsey',
    name: '(GMT+00:00) Saint Peter Port, St Martin, Saint Sampson, St Anne, Saint Saviour',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Europe/Isle_of_Man (GMT+00:00)',
    code: 'Europe/Isle_of_Man',
    name: '(GMT+00:00) Douglas, Ramsey, Peel, Port Erin, Castletown',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Europe/Jersey (GMT+00:00)',
    code: 'Europe/Jersey',
    name: '(GMT+00:00) Saint Helier, Le Hocq',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Europe/Lisbon (GMT+00:00)',
    code: 'Europe/Lisbon',
    name: '(GMT+00:00) Lisbon, Porto, Amadora, Braga, Setúbal',
    utc: '+00:00',
    abbr: 'WET'
  },
  {
    label: 'Europe/London (GMT+00:00)',
    code: 'Europe/London',
    name: '(GMT+00:00) London, Birmingham, Liverpool, Sheffield, Bristol',
    utc: '+00:00',
    abbr: 'GMT'
  },
  {
    label: 'Africa/Algiers (GMT+01:00)',
    code: 'Africa/Algiers',
    name: '(GMT+01:00) Algiers, Boumerdas, Oran, Tébessa, Constantine',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Africa/Bangui (GMT+01:00)',
    code: 'Africa/Bangui',
    name: '(GMT+01:00) Bangui, Bimbo, Mbaïki, Berbérati, Kaga Bandoro',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Brazzaville (GMT+01:00)',
    code: 'Africa/Brazzaville',
    name: '(GMT+01:00) Brazzaville, Pointe-Noire, Dolisie, Kayes, Owando',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Ceuta (GMT+01:00)',
    code: 'Africa/Ceuta',
    name: '(GMT+01:00) Ceuta, Melilla',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Africa/Douala (GMT+01:00)',
    code: 'Africa/Douala',
    name: '(GMT+01:00) Douala, Yaoundé, Garoua, Kousséri, Bamenda',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Kinshasa (GMT+01:00)',
    code: 'Africa/Kinshasa',
    name: '(GMT+01:00) Kinshasa, Masina, Kikwit, Mbandaka, Matadi',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Lagos (GMT+01:00)',
    code: 'Africa/Lagos',
    name: '(GMT+01:00) Lagos, Kano, Ibadan, Kaduna, Port Harcourt',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Libreville (GMT+01:00)',
    code: 'Africa/Libreville',
    name: '(GMT+01:00) Libreville, Port-Gentil, Franceville, Oyem, Moanda',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Luanda (GMT+01:00)',
    code: 'Africa/Luanda',
    name: `(GMT+01:00) Luanda, N'dalatando, Huambo, Lobito, Benguela`,
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Malabo (GMT+01:00)',
    code: 'Africa/Malabo',
    name: '(GMT+01:00) Bata, Malabo, Ebebiyin, Aconibe, Añisoc',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Ndjamena (GMT+01:00)',
    code: 'Africa/Ndjamena',
    name: `(GMT+01:00) N'Djamena, Moundou, Sarh, Abéché, Kelo`,
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Niamey (GMT+01:00)',
    code: 'Africa/Niamey',
    name: '(GMT+01:00) Niamey, Zinder, Maradi, Agadez, Alaghsas',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Porto-Novo (GMT+01:00)',
    code: 'Africa/Porto-Novo',
    name: '(GMT+01:00) Cotonou, Abomey-Calavi, Djougou, Porto-Novo, Parakou',
    utc: '+01:00',
    abbr: 'WAT'
  },
  {
    label: 'Africa/Tunis (GMT+01:00)',
    code: 'Africa/Tunis',
    name: '(GMT+01:00) Tunis, Sfax, Sousse, Kairouan, Bizerte',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Africa/Windhoek (GMT+01:00)',
    code: 'Africa/Windhoek',
    name: '(GMT+01:00) Windhoek, Rundu, Walvis Bay, Oshakati, Swakopmund',
    utc: '+01:00',
    abbr: 'CAT'
  },
  {
    label: 'Arctic/Longyearbyen (GMT+01:00)',
    code: 'Arctic/Longyearbyen',
    name: '(GMT+01:00) Longyearbyen, Olonkinbyen',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Amsterdam (GMT+01:00)',
    code: 'Europe/Amsterdam',
    name: '(GMT+01:00) Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Andorra (GMT+01:00)',
    code: 'Europe/Andorra',
    name: '(GMT+01:00) Andorra la Vella, les Escaldes, Encamp, Sant Julià de Lòria, la Massana',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Belgrade (GMT+01:00)',
    code: 'Europe/Belgrade',
    name: '(GMT+01:00) Belgrade, Pristina, Niš, Novi Sad, Prizren',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Berlin (GMT+01:00)',
    code: 'Europe/Berlin',
    name: '(GMT+01:00) Berlin, Hamburg, Munich, Köln, Frankfurt am Main',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Bratislava (GMT+01:00)',
    code: 'Europe/Bratislava',
    name: '(GMT+01:00) Bratislava, Košice, Prešov, Nitra, Žilina',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Brussels (GMT+01:00)',
    code: 'Europe/Brussels',
    name: '(GMT+01:00) Brussels, Antwerpen, Gent, Charleroi, Liège',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Budapest (GMT+01:00)',
    code: 'Europe/Budapest',
    name: '(GMT+01:00) Budapest, Debrecen, Miskolc, Szeged, Pécs',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Copenhagen (GMT+01:00)',
    code: 'Europe/Copenhagen',
    name: '(GMT+01:00) Copenhagen, Århus, Odense, Aalborg, Frederiksberg',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Gibraltar (GMT+01:00)',
    code: 'Europe/Gibraltar',
    name: '(GMT+01:00) Gibraltar',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Ljubljana (GMT+01:00)',
    code: 'Europe/Ljubljana',
    name: '(GMT+01:00) Ljubljana, Maribor, Celje, Kranj, Velenje',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Luxembourg (GMT+01:00)',
    code: 'Europe/Luxembourg',
    name: '(GMT+01:00) Luxembourg, Esch-sur-Alzette, Dudelange, Schifflange, Bettembourg',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Madrid (GMT+01:00)',
    code: 'Europe/Madrid',
    name: '(GMT+01:00) Madrid, Barcelona, Valencia, Sevilla, Zaragoza',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Malta (GMT+01:00)',
    code: 'Europe/Malta',
    name: '(GMT+01:00) Birkirkara, Qormi, Mosta, Żabbar, San Pawl il-Baħar',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Monaco (GMT+01:00)',
    code: 'Europe/Monaco',
    name: '(GMT+01:00) Monaco, Monte-Carlo, La Condamine',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Oslo (GMT+01:00)',
    code: 'Europe/Oslo',
    name: '(GMT+01:00) Oslo, Bergen, Trondheim, Stavanger, Drammen',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Paris (GMT+01:00)',
    code: 'Europe/Paris',
    name: '(GMT+01:00) Paris, Marseille, Lyon, Toulouse, Nice',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Podgorica (GMT+01:00)',
    code: 'Europe/Podgorica',
    name: '(GMT+01:00) Podgorica, Nikšić, Herceg Novi, Pljevlja, Budva',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Prague (GMT+01:00)',
    code: 'Europe/Prague',
    name: '(GMT+01:00) Prague, Brno, Ostrava, Pilsen, Olomouc',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Rome (GMT+01:00)',
    code: 'Europe/Rome',
    name: '(GMT+01:00) Rome, Milan, Naples, Turin, Palermo',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/San_Marino (GMT+01:00)',
    code: 'Europe/San_Marino',
    name: '(GMT+01:00) Serravalle, Borgo Maggiore, San Marino, Domagnano, Fiorentino',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Sarajevo (GMT+01:00)',
    code: 'Europe/Sarajevo',
    name: '(GMT+01:00) Sarajevo, Banja Luka, Zenica, Tuzla, Mostar',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Skopje (GMT+01:00)',
    code: 'Europe/Skopje',
    name: '(GMT+01:00) Skopje, Bitola, Kumanovo, Prilep, Tetovo',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Stockholm (GMT+01:00)',
    code: 'Europe/Stockholm',
    name: '(GMT+01:00) Stockholm, Göteborg, Malmö, Uppsala, Sollentuna',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Tirane (GMT+01:00)',
    code: 'Europe/Tirane',
    name: '(GMT+01:00) Tirana, Durrës, Elbasan, Vlorë, Shkodër',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Vaduz (GMT+01:00)',
    code: 'Europe/Vaduz',
    name: '(GMT+01:00) Schaan, Vaduz, Triesen, Balzers, Eschen',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Vatican (GMT+01:00)',
    code: 'Europe/Vatican',
    name: '(GMT+01:00) Vatican City',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Vienna (GMT+01:00)',
    code: 'Europe/Vienna',
    name: '(GMT+01:00) Vienna, Graz, Linz, Favoriten, Donaustadt',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Warsaw (GMT+01:00)',
    code: 'Europe/Warsaw',
    name: '(GMT+01:00) Warsaw, Łódź, Kraków, Wrocław, Poznań',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Zagreb (GMT+01:00)',
    code: 'Europe/Zagreb',
    name: '(GMT+01:00) Zagreb, Split, Rijeka, Osijek, Zadar',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Europe/Zurich (GMT+01:00)',
    code: 'Europe/Zurich',
    name: '(GMT+01:00) Zürich, Genève, Basel, Lausanne, Bern',
    utc: '+01:00',
    abbr: 'CET'
  },
  {
    label: 'Africa/Blantyre (GMT+02:00)',
    code: 'Africa/Blantyre',
    name: '(GMT+02:00) Lilongwe, Blantyre, Mzuzu, Zomba, Kasungu',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Bujumbura (GMT+02:00)',
    code: 'Africa/Bujumbura',
    name: '(GMT+02:00) Bujumbura, Muyinga, Gitega, Ruyigi, Ngozi',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Cairo (GMT+02:00)',
    code: 'Africa/Cairo',
    name: '(GMT+02:00) Cairo, Alexandria, Giza, Port Said, Suez',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Africa/Gaborone (GMT+02:00)',
    code: 'Africa/Gaborone',
    name: '(GMT+02:00) Gaborone, Francistown, Molepolole, Selebi-Phikwe, Maun',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Harare (GMT+02:00)',
    code: 'Africa/Harare',
    name: '(GMT+02:00) Harare, Bulawayo, Chitungwiza, Mutare, Gweru',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Johannesburg (GMT+02:00)',
    code: 'Africa/Johannesburg',
    name: '(GMT+02:00) Cape Town, Durban, Johannesburg, Soweto, Pretoria',
    utc: '+02:00',
    abbr: 'SAST'
  },
  {
    label: 'Africa/Juba (GMT+02:00)',
    code: 'Africa/Juba',
    name: '(GMT+02:00) Juba, Winejok, Malakal, Wau, Kuacjok',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Khartoum (GMT+02:00)',
    code: 'Africa/Khartoum',
    name: '(GMT+02:00) Khartoum, Omdurman, Nyala, Port Sudan, Kassala',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Kigali (GMT+02:00)',
    code: 'Africa/Kigali',
    name: '(GMT+02:00) Kigali, Butare, Gitarama, Musanze, Gisenyi',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Lubumbashi (GMT+02:00)',
    code: 'Africa/Lubumbashi',
    name: '(GMT+02:00) Lubumbashi, Mbuji-Mayi, Kisangani, Kananga, Likasi',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Lusaka (GMT+02:00)',
    code: 'Africa/Lusaka',
    name: '(GMT+02:00) Lusaka, Kitwe, Ndola, Kabwe, Chingola',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Maputo (GMT+02:00)',
    code: 'Africa/Maputo',
    name: '(GMT+02:00) Maputo, Matola, Beira, Nampula, Chimoio',
    utc: '+02:00',
    abbr: 'CAT'
  },
  {
    label: 'Africa/Maseru (GMT+02:00)',
    code: 'Africa/Maseru',
    name: `(GMT+02:00) Maseru, Mafeteng, Leribe, Maputsoe, Mohale's Hoek`,
    utc: '+02:00',
    abbr: 'SAST'
  },
  {
    label: 'Africa/Mbabane (GMT+02:00)',
    code: 'Africa/Mbabane',
    name: '(GMT+02:00) Manzini, Mbabane, Big Bend, Malkerns, Nhlangano',
    utc: '+02:00',
    abbr: 'SAST'
  },
  {
    label: 'Africa/Tripoli (GMT+02:00)',
    code: 'Africa/Tripoli',
    name: '(GMT+02:00) Tripoli, Benghazi, Mişrātah, Tarhuna, Al Khums',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Asia/Amman (GMT+02:00)',
    code: 'Asia/Amman',
    name: '(GMT+02:00) Amman, Zarqa, Irbid, Russeifa, Wādī as Sīr',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Asia/Beirut (GMT+02:00)',
    code: 'Asia/Beirut',
    name: `(GMT+02:00) Beirut, Ra's Bayrūt, Tripoli, Sidon, Tyre`,
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Asia/Damascus (GMT+02:00)',
    code: 'Asia/Damascus',
    name: '(GMT+02:00) Aleppo, Damascus, Homs, Ḩamāh, Latakia',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Asia/Famagusta (GMT+02:00)',
    code: 'Asia/Famagusta',
    name: '(GMT+02:00) Famagusta, Kyrenia, Protaras, Paralímni, Lápithos',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Asia/Gaza (GMT+02:00)',
    code: 'Asia/Gaza',
    name: '(GMT+02:00) Gaza, Khān Yūnis, Jabālyā, Rafaḩ, Dayr al Balaḩ',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Asia/Hebron (GMT+02:00)',
    code: 'Asia/Hebron',
    name: '(GMT+02:00) East Jerusalem, Hebron, Nablus, Battir, Ţūlkarm',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Asia/Jerusalem (GMT+02:00)',
    code: 'Asia/Jerusalem',
    name: '(GMT+02:00) Jerusalem, Tel Aviv, West Jerusalem, Haifa, Ashdod',
    utc: '+02:00',
    abbr: 'IST'
  },
  {
    label: 'Asia/Nicosia (GMT+02:00)',
    code: 'Asia/Nicosia',
    name: '(GMT+02:00) Nicosia, Limassol, Larnaca, Stróvolos, Paphos',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Athens (GMT+02:00)',
    code: 'Europe/Athens',
    name: '(GMT+02:00) Athens, Thessaloníki, Pátra, Piraeus, Lárisa',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Bucharest (GMT+02:00)',
    code: 'Europe/Bucharest',
    name: '(GMT+02:00) Bucharest, Sector 3, Sector 6, Sector 2, Iaşi',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Chisinau (GMT+02:00)',
    code: 'Europe/Chisinau',
    name: '(GMT+02:00) Chisinau, Tiraspol, Bălţi, Bender, Rîbniţa',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Helsinki (GMT+02:00)',
    code: 'Europe/Helsinki',
    name: '(GMT+02:00) Helsinki, Espoo, Tampere, Vantaa, Turku',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Kaliningrad (GMT+02:00)',
    code: 'Europe/Kaliningrad',
    name: '(GMT+02:00) Kaliningrad, Chernyakhovsk, Sovetsk, Baltiysk, Gusev',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Kiev (GMT+02:00)',
    code: 'Europe/Kiev',
    name: '(GMT+02:00) Kyiv, Kharkiv, Donetsk, Odessa, Dnipro',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Mariehamn (GMT+02:00)',
    code: 'Europe/Mariehamn',
    name: '(GMT+02:00) Mariehamn',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Riga (GMT+02:00)',
    code: 'Europe/Riga',
    name: '(GMT+02:00) Riga, Daugavpils, Liepāja, Jelgava, Jūrmala',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Sofia (GMT+02:00)',
    code: 'Europe/Sofia',
    name: '(GMT+02:00) Sofia, Plovdiv, Varna, Burgas, Ruse',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Tallinn (GMT+02:00)',
    code: 'Europe/Tallinn',
    name: '(GMT+02:00) Tallinn, Tartu, Narva, Kohtla-Järve, Pärnu',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Uzhgorod (GMT+02:00)',
    code: 'Europe/Uzhgorod',
    name: '(GMT+02:00) Uzhgorod, Mukachevo, Khust, Berehove, Tyachiv',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Vilnius (GMT+02:00)',
    code: 'Europe/Vilnius',
    name: '(GMT+02:00) Vilnius, Kaunas, Klaipėda, Šiauliai, Panevėžys',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Europe/Zaporozhye (GMT+02:00)',
    code: 'Europe/Zaporozhye',
    name: '(GMT+02:00) Luhansk, Sevastopol, Sievierodonetsk, Alchevsk, Lysychansk',
    utc: '+02:00',
    abbr: 'EET'
  },
  {
    label: 'Africa/Addis_Ababa (GMT+03:00)',
    code: 'Africa/Addis_Ababa',
    name: `(GMT+03:00) Addis Ababa, Dire Dawa, Mek'ele, Nazrēt, Bahir Dar`,
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Africa/Asmara (GMT+03:00)',
    code: 'Africa/Asmara',
    name: '(GMT+03:00) Asmara, Keren, Massawa, Assab, Mendefera',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Africa/Dar_es_Salaam (GMT+03:00)',
    code: 'Africa/Dar_es_Salaam',
    name: '(GMT+03:00) Dar es Salaam, Mwanza, Zanzibar, Arusha, Mbeya',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Africa/Djibouti (GMT+03:00)',
    code: 'Africa/Djibouti',
    name: `(GMT+03:00) Djibouti, 'Ali Sabieh, Tadjourah, Obock, Dikhil`,
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Africa/Kampala (GMT+03:00)',
    code: 'Africa/Kampala',
    name: '(GMT+03:00) Kampala, Gulu, Lira, Mbarara, Jinja',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Africa/Mogadishu (GMT+03:00)',
    code: 'Africa/Mogadishu',
    name: '(GMT+03:00) Mogadishu, Hargeysa, Berbera, Kismayo, Marka',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Africa/Nairobi (GMT+03:00)',
    code: 'Africa/Nairobi',
    name: '(GMT+03:00) Nairobi, Mombasa, Nakuru, Eldoret, Kisumu',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Antarctica/Syowa (GMT+03:00)',
    code: 'Antarctica/Syowa',
    name: '(GMT+03:00) Syowa',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Asia/Aden (GMT+03:00)',
    code: 'Asia/Aden',
    name: '(GMT+03:00) Sanaa, Al Ḩudaydah, Taiz, Aden, Mukalla',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Asia/Baghdad (GMT+03:00)',
    code: 'Asia/Baghdad',
    name: '(GMT+03:00) Baghdad, Basrah, Al Mawşil al Jadīdah, Al Başrah al Qadīmah, Mosul',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Asia/Bahrain (GMT+03:00)',
    code: 'Asia/Bahrain',
    name: `(GMT+03:00) Manama, Al Muharraq, Ar Rifā', Dār Kulayb, Madīnat Ḩamad`,
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Asia/Kuwait (GMT+03:00)',
    code: 'Asia/Kuwait',
    name: '(GMT+03:00) Al Aḩmadī, Ḩawallī, As Sālimīyah, Şabāḩ as Sālim, Al Farwānīyah',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Asia/Qatar (GMT+03:00)',
    code: 'Asia/Qatar',
    name: '(GMT+03:00) Doha, Ar Rayyān, Umm Şalāl Muḩammad, Al Wakrah, Al Khawr',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Asia/Riyadh (GMT+03:00)',
    code: 'Asia/Riyadh',
    name: '(GMT+03:00) Riyadh, Jeddah, Mecca, Medina, Sulţānah',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Europe/Istanbul (GMT+03:00)',
    code: 'Europe/Istanbul',
    name: '(GMT+03:00) Istanbul, Ankara, İzmir, Bursa, Adana',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Europe/Kirov (GMT+03:00)',
    code: 'Europe/Kirov',
    name: `(GMT+03:00) Kirov, Kirovo-Chepetsk, Vyatskiye Polyany, Slobodskoy, Kotel'nich`,
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Europe/Minsk (GMT+03:00)',
    code: 'Europe/Minsk',
    name: `(GMT+03:00) Minsk, Homyel', Mahilyow, Vitebsk, Hrodna`,
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Europe/Moscow (GMT+03:00)',
    code: 'Europe/Moscow',
    name: '(GMT+03:00) Moscow, Saint Petersburg, Nizhniy Novgorod, Kazan, Rostov-na-Donu',
    utc: '+03:00',
    abbr: 'MSK'
  },
  {
    label: 'Europe/Simferopol (GMT+03:00)',
    code: 'Europe/Simferopol',
    name: '(GMT+03:00) Simferopol, Kerch, Yevpatoriya, Yalta, Feodosiya',
    utc: '+03:00',
    abbr: 'MSK'
  },
  {
    label: 'Europe/Volgograd (GMT+03:00)',
    code: 'Europe/Volgograd',
    name: '(GMT+03:00) Volgograd, Volzhskiy, Kamyshin, Mikhaylovka, Uryupinsk',
    utc: '+03:00',
    abbr: '+03'
  },
  {
    label: 'Indian/Antananarivo (GMT+03:00)',
    code: 'Indian/Antananarivo',
    name: '(GMT+03:00) Antananarivo, Toamasina, Antsirabe, Fianarantsoa, Mahajanga',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Indian/Comoro (GMT+03:00)',
    code: 'Indian/Comoro',
    name: '(GMT+03:00) Moroni, Moutsamoudou, Fomboni, Domoni, Tsimbeo',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Indian/Mayotte (GMT+03:00)',
    code: 'Indian/Mayotte',
    name: '(GMT+03:00) Mamoudzou, Koungou, Dzaoudzi, Dembeni, Sada',
    utc: '+03:00',
    abbr: 'EAT'
  },
  {
    label: 'Asia/Tehran (GMT+03:30)',
    code: 'Asia/Tehran',
    name: '(GMT+03:30) Tehran, Mashhad, Isfahan, Karaj, Tabriz',
    utc: '+03:30',
    abbr: '+0330'
  },
  {
    label: 'Asia/Baku (GMT+04:00)',
    code: 'Asia/Baku',
    name: '(GMT+04:00) Baku, Ganja, Sumgayit, Lankaran, Yevlakh',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Asia/Dubai (GMT+04:00)',
    code: 'Asia/Dubai',
    name: '(GMT+04:00) Dubai, Sharjah, Abu Dhabi, Ajman City, Ras Al Khaimah City',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Asia/Muscat (GMT+04:00)',
    code: 'Asia/Muscat',
    name: '(GMT+04:00) Muscat, Seeb, Şalālah, Bawshar, Sohar',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Asia/Tbilisi (GMT+04:00)',
    code: 'Asia/Tbilisi',
    name: '(GMT+04:00) Tbilisi, Kutaisi, Batumi, Sokhumi, Zugdidi',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Asia/Yerevan (GMT+04:00)',
    code: 'Asia/Yerevan',
    name: '(GMT+04:00) Yerevan, Gyumri, Vanadzor, Vagharshapat, Hrazdan',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Europe/Astrakhan (GMT+04:00)',
    code: 'Europe/Astrakhan',
    name: '(GMT+04:00) Astrakhan, Akhtubinsk, Znamensk, Kharabali, Kamyzyak',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Europe/Samara (GMT+04:00)',
    code: 'Europe/Samara',
    name: `(GMT+04:00) Samara, Togliatti-on-the-Volga, Izhevsk, Syzran', Novokuybyshevsk`,
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Europe/Saratov (GMT+04:00)',
    code: 'Europe/Saratov',
    name: `(GMT+04:00) Saratov, Balakovo, Engel's, Balashov, Vol'sk`,
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Europe/Ulyanovsk (GMT+04:00)',
    code: 'Europe/Ulyanovsk',
    name: `(GMT+04:00) Ulyanovsk, Dimitrovgrad, Inza, Barysh, Novoul'yanovsk`,
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Indian/Mahe (GMT+04:00)',
    code: 'Indian/Mahe',
    name: '(GMT+04:00) Victoria, Anse Boileau, Bel Ombre, Beau Vallon, Cascade',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Indian/Mauritius (GMT+04:00)',
    code: 'Indian/Mauritius',
    name: '(GMT+04:00) Port Louis, Beau Bassin-Rose Hill, Vacoas, Curepipe, Quatre Bornes',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Indian/Reunion (GMT+04:00)',
    code: 'Indian/Reunion',
    name: '(GMT+04:00) Saint-Denis, Saint-Paul, Saint-Pierre, Le Tampon, Saint-André',
    utc: '+04:00',
    abbr: '+04'
  },
  {
    label: 'Asia/Kabul (GMT+04:30)',
    code: 'Asia/Kabul',
    name: '(GMT+04:30) Kabul, Kandahār, Mazār-e Sharīf, Herāt, Jalālābād',
    utc: '+04:30',
    abbr: '+0430'
  },
  {
    label: 'Antarctica/Mawson (GMT+05:00)',
    code: 'Antarctica/Mawson',
    name: '(GMT+05:00) Mawson',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Aqtau (GMT+05:00)',
    code: 'Asia/Aqtau',
    name: '(GMT+05:00) Shevchenko, Zhanaozen, Beyneu, Shetpe, Yeraliyev',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Aqtobe (GMT+05:00)',
    code: 'Asia/Aqtobe',
    name: '(GMT+05:00) Aktobe, Kandyagash, Shalqar, Khromtau, Embi',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Ashgabat (GMT+05:00)',
    code: 'Asia/Ashgabat',
    name: '(GMT+05:00) Ashgabat, Türkmenabat, Daşoguz, Mary, Balkanabat',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Atyrau (GMT+05:00)',
    code: 'Asia/Atyrau',
    name: '(GMT+05:00) Atyrau, Qulsary, Shalkar, Balykshi, Maqat',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Dushanbe (GMT+05:00)',
    code: 'Asia/Dushanbe',
    name: '(GMT+05:00) Dushanbe, Khujand, Kŭlob, Bokhtar, Istaravshan',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Karachi (GMT+05:00)',
    code: 'Asia/Karachi',
    name: '(GMT+05:00) Karachi, Lahore, Faisalabad, Rawalpindi, Multan',
    utc: '+05:00',
    abbr: 'PKT'
  },
  {
    label: 'Asia/Oral (GMT+05:00)',
    code: 'Asia/Oral',
    name: '(GMT+05:00) Oral, Aqsay, Zhänibek, Tasqala, Zhumysker',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Qyzylorda (GMT+05:00)',
    code: 'Asia/Qyzylorda',
    name: '(GMT+05:00) Kyzylorda, Baikonur, Novokazalinsk, Aral, Chiili',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Samarkand (GMT+05:00)',
    code: 'Asia/Samarkand',
    name: '(GMT+05:00) Samarkand, Bukhara, Nukus, Qarshi, Jizzax',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Tashkent (GMT+05:00)',
    code: 'Asia/Tashkent',
    name: `(GMT+05:00) Tashkent, Namangan, Andijon, Qo'qon, Chirchiq`,
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Yekaterinburg (GMT+05:00)',
    code: 'Asia/Yekaterinburg',
    name: '(GMT+05:00) Yekaterinburg, Chelyabinsk, Ufa, Perm, Orenburg',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Indian/Kerguelen (GMT+05:00)',
    code: 'Indian/Kerguelen',
    name: '(GMT+05:00) Port-aux-Français',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Indian/Maldives (GMT+05:00)',
    code: 'Indian/Maldives',
    name: '(GMT+05:00) Male, Fuvahmulah, Hithadhoo, Kulhudhuffushi, Thinadhoo',
    utc: '+05:00',
    abbr: '+05'
  },
  {
    label: 'Asia/Colombo (GMT+05:30)',
    code: 'Asia/Colombo',
    name: '(GMT+05:30) Colombo, Dehiwala-Mount Lavinia, Moratuwa, Jaffna, Negombo',
    utc: '+05:30',
    abbr: '+0530'
  },
  {
    label: 'Asia/Kolkata (GMT+05:30)',
    code: 'Asia/Kolkata',
    name: '(GMT+05:30) Mumbai, Delhi, Bengaluru, Kolkata, Chennai',
    utc: '+05:30',
    abbr: 'IST'
  },
  {
    label: 'Asia/Kathmandu (GMT+05:45)',
    code: 'Asia/Kathmandu',
    name: '(GMT+05:45) Kathmandu, Pokhara, Pātan, Biratnagar, Birgañj',
    utc: '+05:45',
    abbr: '+0545'
  },
  {
    label: 'Antarctica/Vostok (GMT+06:00)',
    code: 'Antarctica/Vostok',
    name: '(GMT+06:00) Vostok',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Almaty (GMT+06:00)',
    code: 'Asia/Almaty',
    name: '(GMT+06:00) Almaty, Karagandy, Shymkent, Taraz, Nur-Sultan',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Bishkek (GMT+06:00)',
    code: 'Asia/Bishkek',
    name: '(GMT+06:00) Bishkek, Osh, Jalal-Abad, Karakol, Tokmok',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Dhaka (GMT+06:00)',
    code: 'Asia/Dhaka',
    name: '(GMT+06:00) Dhaka, Chattogram, Khulna, Rājshāhi, Comilla',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Omsk (GMT+06:00)',
    code: 'Asia/Omsk',
    name: '(GMT+06:00) Omsk, Tara, Kalachinsk, Znamenskoye, Tavricheskoye',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Qostanay (GMT+06:00)',
    code: 'Asia/Qostanay',
    name: '(GMT+06:00) Kostanay, Rudnyy, Dzhetygara, Arkalyk, Lisakovsk',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Thimphu (GMT+06:00)',
    code: 'Asia/Thimphu',
    name: '(GMT+06:00) himphu, Punākha, Tsirang, Phuntsholing, Pemagatshel',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Urumqi (GMT+06:00)',
    code: 'Asia/Urumqi',
    name: '(GMT+06:00) Zhongshan, Ürümqi, Zhanjiang, Shihezi, Huocheng',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Indian/Chagos (GMT+06:00)',
    code: 'Indian/Chagos',
    name: '(GMT+06:00) British Indian Ocean Territory',
    utc: '+06:00',
    abbr: '+06'
  },
  {
    label: 'Asia/Yangon (GMT+06:30)',
    code: 'Asia/Yangon',
    name: '(GMT+06:30) Yangon, Mandalay, Nay Pyi Taw, Mawlamyine, Kyain Seikgyi Township',
    utc: '+06:30',
    abbr: '+0630'
  },
  {
    label: 'Indian/Cocos (GMT+06:30)',
    code: 'Indian/Cocos',
    name: '(GMT+06:30) West Island',
    utc: '+06:30',
    abbr: '+0630'
  },
  {
    label: 'Antarctica/Davis (GMT+07:00)',
    code: 'Antarctica/Davis',
    name: '(GMT+07:00) Davis',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Bangkok (GMT+07:00)',
    code: 'Asia/Bangkok',
    name: '(GMT+07:00) Bangkok, Hanoi, Haiphong, Samut Prakan, Mueang Nonthaburi',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Barnaul (GMT+07:00)',
    code: 'Asia/Barnaul',
    name: '(GMT+07:00) Barnaul, Biysk, Rubtsovsk, Novoaltaysk, Gorno-Altaysk',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Hovd (GMT+07:00)',
    code: 'Asia/Hovd',
    name: '(GMT+07:00) Khovd, Ölgii, Ulaangom, Uliastay, Altai',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Ho_Chi_Minh (GMT+07:00)',
    code: 'Asia/Ho_Chi_Minh',
    name: '(GMT+07:00) Ho Chi Minh City, Da Nang, Biên Hòa, Nha Trang, Cần Thơ',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Jakarta (GMT+07:00)',
    code: 'Asia/Jakarta',
    name: '(GMT+07:00) Jakarta, Surabaya, Medan, Bandung, Bekasi',
    utc: '+07:00',
    abbr: 'WIB'
  },
  {
    label: 'Asia/Krasnoyarsk (GMT+07:00)',
    code: 'Asia/Krasnoyarsk',
    name: '(GMT+07:00) Krasnoyarsk, Abakan, Norilsk, Achinsk, Kyzyl',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Novokuznetsk (GMT+07:00)',
    code: 'Asia/Novokuznetsk',
    name: `(GMT+07:00) Novokuznetsk, Kemerovo, Prokop'yevsk, Leninsk- Kuznetsky, Kiselëvsk`,
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Novosibirsk (GMT+07:00)',
    code: 'Asia/Novosibirsk',
    name: '(GMT+07:00) Novosibirsk, Berdsk, Iskitim, Akademgorodok, Kuybyshev',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Phnom_Penh (GMT+07:00)',
    code: 'Asia/Phnom_Penh',
    name: '(GMT+07:00) Phnom Penh, Takeo, Sihanoukville, Battambang, Siem Reap',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Pontianak (GMT+07:00)',
    code: 'Asia/Pontianak',
    name: '(GMT+07:00) Pontianak, Tanjung Pinang, Palangkaraya, Singkawang, Sampit',
    utc: '+07:00',
    abbr: 'WIB'
  },
  {
    label: 'Asia/Tomsk (GMT+07:00)',
    code: 'Asia/Tomsk',
    name: '(GMT+07:00) Tomsk, Seversk, Strezhevoy, Kolpashevo, Asino',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Vientiane (GMT+07:00)',
    code: 'Asia/Vientiane',
    name: '(GMT+07:00) Vientiane, Pakse, Thakhèk, Savannakhet, Luang Prabang',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Indian/Christmas (GMT+07:00)',
    code: 'Indian/Christmas',
    name: '(GMT+07:00) Flying Fish Cove',
    utc: '+07:00',
    abbr: '+07'
  },
  {
    label: 'Asia/Brunei (GMT+08:00)',
    code: 'Asia/Brunei',
    name: '(GMT+08:00) Bandar Seri Begawan, Kuala Belait, Seria, Tutong, Bangar',
    utc: '+08:00',
    abbr: '+08'
  },
  {
    label: 'Asia/Choibalsan (GMT+08:00)',
    code: 'Asia/Choibalsan',
    name: '(GMT+08:00) Baruun-Urt, Choibalsan',
    utc: '+08:00',
    abbr: '+08'
  },
  {
    label: 'Asia/Hong_Kong (GMT+08:00)',
    code: 'Asia/Hong_Kong',
    name: '(GMT+08:00) Hong Kong, Kowloon, Tsuen Wan, Yuen Long Kau Hui, Tung Chung',
    utc: '+08:00',
    abbr: 'HKT'
  },
  {
    label: 'Asia/Irkutsk (GMT+08:00)',
    code: 'Asia/Irkutsk',
    name: `(GMT+08:00) Irkutsk, Ulan-Ude, Bratsk, Angarsk, Ust'-Ilimsk`,
    utc: '+08:00',
    abbr: '+08'
  },
  {
    label: 'Asia/Kuala_Lumpur (GMT+08:00)',
    code: 'Asia/Kuala_Lumpur',
    name: '(GMT+08:00) Kota Bharu, Kuala Lumpur, Klang, Kampung Baru Subang, Johor Bahru',
    utc: '+08:00',
    abbr: '+08'
  },
  {
    label: 'Asia/Kuching (GMT+08:00)',
    code: 'Asia/Kuching',
    name: '(GMT+08:00) Kuching, Kota Kinabalu, Sandakan, Tawau, Miri',
    utc: '+08:00',
    abbr: '+08'
  },
  {
    label: 'Asia/Macau (GMT+08:00)',
    code: 'Asia/Macau',
    name: '(GMT+08:00) Macau',
    utc: '+08:00',
    abbr: 'CST'
  },
  {
    label: 'Asia/Makassar (GMT+08:00)',
    code: 'Asia/Makassar',
    name: '(GMT+08:00) Makassar, Denpasar, City of Balikpapan, Banjarmasin, Manado',
    utc: '+08:00',
    abbr: 'WITA'
  },
  {
    label: 'Asia/Manila (GMT+08:00)',
    code: 'Asia/Manila',
    name: '(GMT+08:00) Quezon City, Manila, Caloocan City, Budta, Davao',
    utc: '+08:00',
    abbr: 'PST'
  },
  {
    label: 'Asia/Shanghai (GMT+08:00)',
    code: 'Asia/Shanghai',
    name: '(GMT+08:00) Shanghai, Beijing, Tianjin, Guangzhou, Shenzhen',
    utc: '+08:00',
    abbr: 'CST'
  },
  {
    label: 'Asia/Singapore (GMT+08:00)',
    code: 'Asia/Singapore',
    name: '(GMT+08:00) Singapore, Woodlands',
    utc: '+08:00',
    abbr: '+08'
  },
  {
    label: 'Asia/Taipei (GMT+08:00)',
    code: 'Asia/Taipei',
    name: '(GMT+08:00) Taipei, Kaohsiung, Taichung, Tainan, Banqiao',
    utc: '+08:00',
    abbr: 'CST'
  },
  {
    label: 'Asia/Ulaanbaatar (GMT+08:00)',
    code: 'Asia/Ulaanbaatar',
    name: '(GMT+08:00) Ulan Bator, Erdenet, Darhan, Hovd, Mörön',
    utc: '+08:00',
    abbr: '+08'
  },
  {
    label: 'Australia/Perth (GMT+08:00)',
    code: 'Australia/Perth',
    name: '(GMT+08:00) Perth, Rockingham, Mandurah, Bunbury, Albany',
    utc: '+08:00',
    abbr: 'AWST'
  },
  {
    label: 'Australia/Eucla (GMT+08:45)',
    code: 'Australia/Eucla',
    name: '(GMT+08:45) Eucla',
    utc: '+08:45',
    abbr: '+0845'
  },
  {
    label: 'Asia/Chita (GMT+09:00)',
    code: 'Asia/Chita',
    name: `(GMT+09:00) Chita, Krasnokamensk, Borzya, Petrovsk-Zabaykal'skiy, Aginskoye`,
    utc: '+09:00',
    abbr: '+09'
  },
  {
    label: 'Asia/Dili (GMT+09:00)',
    code: 'Asia/Dili',
    name: '(GMT+09:00) Dili, Maliana, Suai, Likisá, Aileu',
    utc: '+09:00',
    abbr: '+09'
  },
  {
    label: 'Asia/Jayapura (GMT+09:00)',
    code: 'Asia/Jayapura',
    name: '(GMT+09:00) Ambon, Jayapura, Sorong, Ternate, Abepura',
    utc: '+09:00',
    abbr: 'WIT'
  },
  {
    label: 'Asia/Khandyga (GMT+09:00)',
    code: 'Asia/Khandyga',
    name: '(GMT+09:00) Khandyga',
    utc: '+09:00',
    abbr: '+09'
  },
  {
    label: 'Asia/Pyongyang (GMT+09:00)',
    code: 'Asia/Pyongyang',
    name: `(GMT+09:00) Pyongyang, Hamhŭng, Namp'o, Sunch'ŏn, Hŭngnam`,
    utc: '+09:00',
    abbr: 'KST'
  },
  {
    label: 'Asia/Seoul (GMT+09:00)',
    code: 'Asia/Seoul',
    name: '(GMT+09:00) Seoul, Busan, Incheon, Daegu, Daejeon',
    utc: '+09:00',
    abbr: 'KST'
  },
  {
    label: 'Asia/Tokyo (GMT+09:00)',
    code: 'Asia/Tokyo',
    name: '(GMT+09:00) Tokyo, Yokohama, Osaka, Nagoya, Sapporo',
    utc: '+09:00',
    abbr: 'JST'
  },
  {
    label: 'Asia/Yakutsk (GMT+09:00)',
    code: 'Asia/Yakutsk',
    name: '(GMT+09:00) Yakutsk, Blagoveshchensk, Belogorsk, Neryungri, Svobodnyy',
    utc: '+09:00',
    abbr: '+09'
  },
  {
    label: 'Pacific/Palau (GMT+09:00)',
    code: 'Pacific/Palau',
    name: '(GMT+09:00) Koror, Koror Town, Kloulklubed, Ulimang, Mengellang',
    utc: '+09:00',
    abbr: '+09'
  },
  {
    label: 'Australia/Adelaide (GMT+09:30)',
    code: 'Australia/Adelaide',
    name: '(GMT+09:30) Adelaide, Adelaide Hills, Mount Gambier, Morphett Vale, Gawler',
    utc: '+09:30',
    abbr: 'ACDT'
  },
  {
    label: 'Australia/Broken_Hill (GMT+09:30)',
    code: 'Australia/Broken_Hill',
    name: '(GMT+09:30) Broken Hill',
    utc: '+09:30',
    abbr: 'ACDT'
  },
  {
    label: 'Australia/Darwin (GMT+09:30)',
    code: 'Australia/Darwin',
    name: '(GMT+09:30) Darwin, Alice Springs, Palmerston, Howard Springs',
    utc: '+09:30',
    abbr: 'ACST'
  },
  {
    label: 'Antarctica/DumontDUrville (GMT+10:00)',
    code: 'Antarctica/DumontDUrville',
    name: '(GMT+10:00) DumontDUrville',
    utc: '+10:00',
    abbr: '+10'
  },
  {
    label: 'Antarctica/Macquarie (GMT+10:00)',
    code: 'Antarctica/Macquarie',
    name: '(GMT+10:00) Macquarie',
    utc: '+10:00',
    abbr: 'AEDT'
  },
  {
    label: 'Asia/Ust-Nera (GMT+10:00)',
    code: 'Asia/Ust-Nera',
    name: '(GMT+10:00) Ust-Nera',
    utc: '+10:00',
    abbr: '+10'
  },
  {
    label: 'Asia/Vladivostok (GMT+10:00)',
    code: 'Asia/Vladivostok',
    name: '(GMT+10:00) Vladivostok, Khabarovsk, Khabarovsk Vtoroy, Komsomolsk-on-Amur, Ussuriysk',
    utc: '+10:00',
    abbr: '+10'
  },
  {
    label: 'Australia/Brisbane (GMT+10:00)',
    code: 'Australia/Brisbane',
    name: '(GMT+10:00) Brisbane, Gold Coast, Logan City, Townsville, Cairns',
    utc: '+10:00',
    abbr: 'AEST'
  },
  {
    label: 'Australia/Currie (GMT+10:00)',
    code: 'Australia/Currie',
    name: '(GMT+10:00) Currie',
    utc: '+10:00',
    abbr: 'AEDT'
  },
  {
    label: 'Australia/Hobart (GMT+10:00)',
    code: 'Australia/Hobart',
    name: '(GMT+10:00) Hobart, Launceston, Burnie, Devonport, Sandy Bay',
    utc: '+10:00',
    abbr: 'AEDT'
  },
  {
    label: 'Australia/Lindeman (GMT+10:00)',
    code: 'Australia/Lindeman',
    name: '(GMT+10:00) Lindeman',
    utc: '+10:00',
    abbr: 'AEST'
  },
  {
    label: 'Australia/Melbourne (GMT+10:00)',
    code: 'Australia/Melbourne',
    name: '(GMT+10:00) Melbourne, Geelong, Bendigo, Ballarat, Melbourne City Centre',
    utc: '+10:00',
    abbr: 'AEDT'
  },
  {
    label: 'Australia/Sydney (GMT+10:00)',
    code: 'Australia/Sydney',
    name: '(GMT+10:00) Sydney, Canberra, Newcastle, Wollongong, Maitland',
    utc: '+10:00',
    abbr: 'AEDT'
  },
  {
    label: 'Pacific/Chuuk (GMT+10:00)',
    code: 'Pacific/Chuuk',
    name: '(GMT+10:00) Weno, Colonia',
    utc: '+10:00',
    abbr: '+10'
  },
  {
    label: 'Pacific/Guam (GMT+10:00)',
    code: 'Pacific/Guam',
    name: '(GMT+10:00) Dededo Village, Yigo Village, Tamuning, Tamuning-Tumon-Harmon Village, Mangilao Village',
    utc: '+10:00',
    abbr: ''
  },
  {
    label: 'Pacific/Port_Moresby (GMT+10:00)',
    code: 'Pacific/Port_Moresby',
    name: '(GMT+10:00) Port Moresby, Lae, Mount Hagen, Popondetta, Madang',
    utc: '+10:00',
    abbr: '+10'
  },
  {
    label: 'Pacific/Saipan (GMT+10:00)',
    code: 'Pacific/Saipan',
    name: '(GMT+10:00) Saipan, San Jose Village',
    utc: '+10:00',
    abbr: 'ChST'
  },
  {
    label: 'Australia/Lord_Howe (GMT+10:30)',
    code: 'Australia/Lord_Howe',
    name: '(GMT+10:30) Lord Howe',
    utc: '+10:30',
    abbr: '+11'
  },
  {
    label: 'Antarctica/Casey (GMT+11:00)',
    code: 'Antarctica/Casey',
    name: '(GMT+11:00) Casey',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Asia/Magadan (GMT+11:00)',
    code: 'Asia/Magadan',
    name: '(GMT+11:00) Magadan, Ust-Nera, Susuman, Ola',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Asia/Sakhalin (GMT+11:00)',
    code: 'Asia/Sakhalin',
    name: `(GMT+11:00) Yuzhno-Sakhalinsk, Korsakov, Kholmsk, Okha, Nevel'sk`,
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Asia/Srednekolymsk (GMT+11:00)',
    code: 'Asia/Srednekolymsk',
    name: '(GMT+11:00) Srednekolymsk',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Pacific/Bougainville (GMT+11:00)',
    code: 'Pacific/Bougainville',
    name: '(GMT+11:00) Arawa, Buka',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Pacific/Efate (GMT+11:00)',
    code: 'Pacific/Efate',
    name: '(GMT+11:00) Port-Vila, Luganville, Isangel, Sola, Lakatoro',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Pacific/Guadalcanal (GMT+11:00)',
    code: 'Pacific/Guadalcanal',
    name: '(GMT+11:00) Honiara, Malango, Auki, Gizo, Buala',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Pacific/Kosrae (GMT+11:00)',
    code: 'Pacific/Kosrae',
    name: '(GMT+11:00) Tofol',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Pacific/Norfolk (GMT+11:00)',
    code: 'Pacific/Norfolk',
    name: '(GMT+11:00) Kingston',
    utc: '+11:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Noumea (GMT+11:00)',
    code: 'Pacific/Noumea',
    name: '(GMT+11:00) Nouméa, Mont-Dore, Dumbéa, Païta, Wé',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Pacific/Pohnpei (GMT+11:00)',
    code: 'Pacific/Pohnpei',
    name: '(GMT+11:00) Kolonia, Kolonia Town, Palikir - National Government Center',
    utc: '+11:00',
    abbr: '+11'
  },
  {
    label: 'Antarctica/McMurdo (GMT+12:00)',
    code: 'Antarctica/McMurdo',
    name: '(GMT+12:00) McMurdo',
    utc: '+12:00',
    abbr: 'NZDT'
  },
  {
    label: 'Asia/Anadyr (GMT+12:00)',
    code: 'Asia/Anadyr',
    name: '(GMT+12:00) Anadyr, Bilibino',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Asia/Kamchatka (GMT+12:00)',
    code: 'Asia/Kamchatka',
    name: `(GMT+12:00) Petropavlovsk-Kamchatsky, Yelizovo, Vilyuchinsk, Klyuchi, Mil'kovo`,
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Auckland (GMT+12:00)',
    code: 'Pacific/Auckland',
    name: '(GMT+12:00) Auckland, Wellington, Christchurch, Manukau City, North Shore',
    utc: '+12:00',
    abbr: 'NZDT'
  },
  {
    label: 'Pacific/Fiji (GMT+12:00)',
    code: 'Pacific/Fiji',
    name: '(GMT+12:00) Suva, Lautoka, Nadi, Labasa, Ba',
    utc: '+12:00',
    abbr: '+13'
  },
  {
    label: 'Pacific/Funafuti (GMT+12:00)',
    code: 'Pacific/Funafuti',
    name: '(GMT+12:00) Funafuti, Savave Village, Tanrake Village, Toga Village, Asau Village',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Kwajalein (GMT+12:00)',
    code: 'Pacific/Kwajalein',
    name: '(GMT+12:00) Ebaye, Jabat',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Majuro (GMT+12:00)',
    code: 'Pacific/Majuro',
    name: '(GMT+12:00) Majuro, Arno, Jabor, Wotje, Mili',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Nauru (GMT+12:00)',
    code: 'Pacific/Nauru',
    name: '(GMT+12:00) Yaren, Baiti, Anabar, Uaboe, Ijuw',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Tarawa (GMT+12:00)',
    code: 'Pacific/Tarawa',
    name: '(GMT+12:00) Tarawa, Betio Village, Bikenibeu Village',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Wake (GMT+12:00)',
    code: 'Pacific/Wake',
    name: '(GMT+12:00) Wake',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Wallis (GMT+12:00)',
    code: 'Pacific/Wallis',
    name: '(GMT+12:00) Mata-Utu, Leava, Alo',
    utc: '+12:00',
    abbr: '+12'
  },
  {
    label: 'Pacific/Chatham (GMT+12:45)',
    code: 'Pacific/Chatham',
    name: '(GMT+12:45) Waitangi',
    utc: '+12:45',
    abbr: '+1345'
  },
  {
    label: 'Pacific/Apia (GMT+13:00)',
    code: 'Pacific/Apia',
    name: '(GMT+13:00) Apia, Asau, Mulifanua, Afega, Leulumoega',
    utc: '+13:00',
    abbr: '+14'
  },
  {
    label: 'Pacific/Enderbury (GMT+13:00)',
    code: 'Pacific/Enderbury',
    name: '(GMT+13:00) Enderbury',
    utc: '+13:00',
    abbr: '+13'
  },
  {
    label: 'Pacific/Fakaofo (GMT+13:00)',
    code: 'Pacific/Fakaofo',
    name: '(GMT+13:00) Atafu Village, Nukunonu, Fale old settlement',
    utc: '+13:00',
    abbr: '+13'
  },
  {
    label: 'Pacific/Tongatapu (GMT+13:00)',
    code: 'Pacific/Tongatapu',
    name: `(GMT+13:00) Nuku'alofa, Lapaha, Neiafu, Pangai, 'Ohonua`,
    utc: '+13:00',
    abbr: '+13'
  },
  {
    label: 'Pacific/Kiritimati (GMT+14:00)',
    code: 'Pacific/Kiritimati',
    name: '(GMT+14:00) Kiritimati',
    utc: '+14:00',
    abbr: '+14'
  }
];

export default timezones;
