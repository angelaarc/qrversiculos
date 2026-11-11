/* ============================================================
   ARCHIVO DE DATOS (el que tú editas como administradora)
   - VERSICULOS: agrega, quita o cambia versículos.
   - MUSICAS: lista de canciones que están en la carpeta "musica".
   - FONDOS: pares de colores para los degradados.
   Texto basado en la Reina-Valera 1909 (dominio público).
   ============================================================ */

const VERSICULOS = [
  { texto: "Porque de tal manera amó Dios al mundo, que ha dado á su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.", cita: "Juan 3:16" },
  { texto: "Jehová es mi pastor; nada me faltará.", cita: "Salmo 23:1" },
  { texto: "No temas, que yo soy contigo; no desmayes, que yo soy tu Dios que te esfuerzo: siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.", cita: "Isaías 41:10" },
  { texto: "Todo lo puedo en Cristo que me fortalece.", cita: "Filipenses 4:13" },
  { texto: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios será contigo en donde quiera que fueres.", cita: "Josué 1:9" },
  { texto: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.", cita: "Jeremías 29:11" },
  { texto: "Venid á mí todos los que estáis trabajados y cargados, y yo os haré descansar.", cita: "Mateo 11:28" },
  { texto: "Y sabemos que á los que á Dios aman, todas las cosas les ayudan á bien, es á saber, á los que conforme al propósito son llamados.", cita: "Romanos 8:28" },
  { texto: "Dios es nuestro amparo y fortaleza, socorro bien presente en las tribulaciones.", cita: "Salmo 46:1" },
  { texto: "Fíate de Jehová de todo tu corazón, y no estribes en tu prudencia.", cita: "Proverbios 3:5" },
  { texto: "Reconócelo en todos tus caminos, y él enderezará tus veredas.", cita: "Proverbios 3:6" },
  { texto: "Mi socorro viene de Jehová, que hizo los cielos y la tierra.", cita: "Salmo 121:2" },
  { texto: "Cercano está Jehová á los quebrantados de corazón; y salvará á los contritos de espíritu.", cita: "Salmo 34:18" },
  { texto: "Echa sobre Jehová tu carga, y él te sustentará: no dejará para siempre caído al justo.", cita: "Salmo 55:22" },
  { texto: "Echando toda vuestra solicitud sobre él, porque él tiene cuidado de vosotros.", cita: "1 Pedro 5:7" },
  { texto: "Mas los que esperan á Jehová tendrán nuevas fuerzas; levantarán las alas como águilas; correrán, y no se cansarán; caminarán, y no se fatigarán.", cita: "Isaías 40:31" },
  { texto: "Jehová es mi luz y mi salud; ¿de quién temeré? Jehová es la fortaleza de mi vida; ¿de quién he de atemorizarme?", cita: "Salmo 27:1" },
  { texto: "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo.", cita: "Juan 14:27" },
  { texto: "Un mandamiento nuevo os doy: Que os améis unos á otros; como yo os he amado, que también os améis unos á otros.", cita: "Juan 13:34" },
  { texto: "¿Qué, pues, diremos á esto? Si Dios por nosotros, ¿quién contra nosotros?", cita: "Romanos 8:31" },
  { texto: "Bástate mi gracia; porque mi poder en la flaqueza se perfecciona.", cita: "2 Corintios 12:9" },
  { texto: "Nuevas son cada mañana; grande es tu fidelidad.", cita: "Lamentaciones 3:23" },
  { texto: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.", cita: "Mateo 6:33" },
  { texto: "Encomienda á Jehová tu camino, y espera en él; y él hará.", cita: "Salmo 37:5" },
  { texto: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos, que Jehová tu Dios es el que va contigo: no te dejará, ni te desamparará.", cita: "Deuteronomio 31:6" },
  { texto: "Lámpara es á mis pies tu palabra, y lumbrera á mi camino.", cita: "Salmo 119:105" },
  { texto: "Nosotros le amamos á él, porque él nos amó primero.", cita: "1 Juan 4:19" },
  { texto: "Allegaos á Dios, y él se allegará á vosotros.", cita: "Santiago 4:8" },
  { texto: "Por la tarde durará el lloro, y á la mañana vendrá la alegría.", cita: "Salmo 30:5" },
  { texto: "Mas ahora, así dice Jehová: No temas, porque yo te redimí; te puse nombre, mío eres tú.", cita: "Isaías 43:1" },
  { texto: "Porque á sus ángeles mandará acerca de ti, que te guarden en todos tus caminos.", cita: "Salmo 91:11" },
  { texto: "No nos cansemos, pues, de hacer bien; porque á su tiempo segaremos, si no hubiéremos desmayado.", cita: "Gálatas 6:9" },
  { texto: "Con toda diligencia guarda tu corazón; porque de él mana la vida.", cita: "Proverbios 4:23" },
  { texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él.", cita: "Salmo 118:24" }
];

/* Canciones: pon tus MP3 dentro de la carpeta "musica" y escribe aquí
   sus nombres exactos. Si una canción no existe, la página no se rompe. */
const MUSICAS = [
  "musica/Fiesta-en-el-Desierto.mp3",
  "musica/musica1.mp3",
  "musica/musica2.mp3"
];

/* Fondos: cada par es [color 1, color 2, color 3]. Son oscuros/medios
   para que el texto blanco se lea bien. */
const FONDOS = [
  ["#1d2b64", "#5b6ee1", "#f8cdda"],
  ["#0f2027", "#2c5364", "#7fb5c9"],
  ["#42275a", "#734b6d", "#e8a8a0"],
  ["#134e5e", "#2a9d8f", "#a8e6cf"],
  ["#232526", "#5a4a42", "#d9a066"],
  ["#2b1055", "#7597de", "#f6d5f7"],
  ["#3a1c71", "#d76d77", "#ffaf7b"],
  ["#0b486b", "#3b8686", "#cff09e"],
  ["#4b134f", "#c94b4b", "#f3c677"],
  ["#141e30", "#35577d", "#9fb8d6"],
  ["#355c7d", "#6c5b7b", "#c06c84"],
  ["#1f4037", "#4a8c6f", "#d4e79e"]
];
