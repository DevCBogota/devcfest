import React, { Component } from 'react';
import Header from './Components/Header';
import EventInfo from './Components/EventInfo';
import Agenda from './Components/Agenda';
import Speakers from './Components/Speakers';
import Venue from './Components/Venue';
import Footer from './Components/Footer';
import moment from 'moment';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      now: moment().format('YYYY-MM-DD hh:mm:ss a'),
      end: moment(this.props.event.endRsvp, 'YYYY-MM-DD hh:mm:ss a'),
      eventDate: moment(this.props.event.date, 'YYYY-MM-DD hh:mm:ss a').format('LL'),
      time: moment(this.props.event.date, 'YYYY-MM-DD hh:mm:ss a').format('LT'),
      rsvp: null
    }
  }

  componentWillMount(){
    if(this.state.now > this.state.end._i) {
      this.setState({ rsvp: false})
    } else {
      this.setState({ rsvp: true})
    }
  }

  render() {
    const { landing, event, agenda, speakers } = this.props;
    return (
      <div className='main'>
        <Header landing={landing} 
          eventDate={this.state.eventDate}
          time={this.state.time}
          rsvp={this.state.rsvp}
          event={event}
        />
        <EventInfo event={event} />
        <Agenda agenda={agenda} />
        <Speakers speakers={speakers} />
        <Venue event={event} 
          eventDate={this.state.eventDate}
          time={this.state.time}
          rsvp={this.state.rsvp}
        />
        <Footer email={landing.email} name={landing.circleName} />
      </div>
    );
  }
};

App.defaultProps = {
  landing: {
    circleName: 'Facebook Developer Circles Guadalajara',
    logo: 'https://s3.amazonaws.com/chewiekie/img/logo-guadalajara.png',
    background: 'https://s3.amazonaws.com/chewiekie/img/devc-bg.png',
    groupUrl: 'https://www.facebook.com/groups/DevCGuadalajara/',
    email: 'devcgdl@gmail.com'
  },
  event: {
    title: 'Reunión Febrero: GraphQL / Messenger Platform',
    description: 'Acompáñanos este 28 de Febrero en Centraal Guadalajara a partir de las 7:00 P.M. para nuestra reunión mensual donde hablaremos de los principales productos y tecnologías de código libre de Facebook.',
    whatIs: 'Developer Circles de Facebook es un programa diseñado para crear comunidades de desarrolladores organizadas localmente. El fin de estas comunidades es informar y proporcionar un foro para conversar y compartir conocimientos sobre los temas de mayor prioridad para los desarrolladores en un mercado concreto.',
    venue: {
      name: 'Centraal Guadalajara',
      address: 'Av. Ignacio Luis Vallarta 3300, 44690 Guadalajara, Jal.',
      lat: 20.6751803,
      lng: -103.3927516
    },
    date: '2018-02-28 07:00:00 pm',
    endRsvp: '2018-02-28 04:00:00 pm',
    buttonText: '¡Participar!',
    messageRsvp: 'Por el momento no es posible registrar más lugares para el evento, nuestro cupo máximo ha sido alcanzado.',
    mailChimpEvent: '//facebook.us16.list-manage.com/subscribe/post?u=b7544c7f63148ada4e7f5893b&amp;id=7037202809'
  },
  agenda: [
    {time: '7:00PM ', activity: 'Registro', attend: 'DEVC GDL'},
    {time: '7:30PM', activity: 'Bienvenida', attend: 'DEVC GDL'},
    {time: '7:40PM', activity: '¿Quién es ese GraphQL del que todos mis amigos están hablando?', attend: 'Fer Perales'},
    {time: '8:20PM', activity: 'Jugando con Messenger API', attend: 'Zura Guerra'},
    {time: '9:00PM', activity: 'Networking', attend: 'Comunidad'},
  ],
  speakers: [
  {
  name: 'Oscar Barajas', 
  photo: '<URL_IMG>', 
  bio: 'Oscar Barajas Bio',
  jobTitle: 'Foundation Layer & Frontend Developer @Platzi',
  conferenceTitle: 'React y un mundo de posibilidades',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'twitter.com/gndx'},
    {name: 'instagram', url: 'instagram.com/gndx'}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Rihan Topete', 
  photo: '<URL_IMG>', 
  bio: 'Rihan Topete Bio',
  jobTitle: 'Community Lead',
  conferenceTitle: 'El impacto de las comunidades de Desarrollo',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://www.facebook.com/rihantopete'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Ana B Martínez', 
  photo: '<URL_IMG>', 
  bio: 'Ana B Martínez Bio',
  jobTitle: 'Community Lead',
  conferenceTitle: 'Girls in Tech ',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://www.facebook.com/anabelisam'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Lesly Zerna', 
  photo: '<URL_IMG>', 
  bio: 'Lesly Zerna Bio',
  jobTitle: 'Google Developer Expert',
  conferenceTitle: 'Artificial Intelligence in Startups & Business',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://www.facebook.com/leslysandra'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Hajer Mahjoub', 
  photo: '<URL_IMG>', 
  bio: 'Hajer Mahjoub Bio',
  jobTitle: 'Ai engineer',
  conferenceTitle: 'Google assistant action ',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://www.facebook.com/HajerMahjoub.it'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Piero Divasto', 
  photo: '<URL_IMG>', 
  bio: 'Piero Divasto Bio',
  jobTitle: 'Lead consultant y developer',
  conferenceTitle: 'Front-end development + Javascript ',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: '@morph3o'},
    {name: 'instagram', url: 'morph3o'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Julia M', 
  photo: '<URL_IMG>', 
  bio: 'Julia M Bio',
  jobTitle: 'Software Developer',
  conferenceTitle: 'Mujeres en Ciberseguridad ',
  description: 'Complete bio or description',
  social: [
    {name: 'linkedin', url: 'https://www.linkedin.com/in/juliaurbinapineda/'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Leo Camacho', 
  photo: '<URL_IMG>', 
  bio: 'Leo Camacho Bio',
  jobTitle: 'Desarrollador de Asistentes Virtuales',
  conferenceTitle: 'Asistentes Virtuales & WhatsApp for Business ',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/leo.aiassistant'},
    {name: 'medium', url: 'https://medium.com/@BuildActions'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Madeline Scarlett', 
  photo: '<URL_IMG>', 
  bio: 'Madeline Scarlett Bio',
  jobTitle: 'Estudiante Ingenieria',
  conferenceTitle: 'Mujeres en ingeniería y carreras tecnólogicas. ',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/madlivie'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},    

{
  name: 'Camilo Montanez', 
  photo: '<URL_IMG>', 
  bio: 'Camilo Montanez Bio',
  jobTitle: 'Business Development',
  conferenceTitle: 'Tecnologias Inmersivas (VR/AR/IA) ',
  description: 'Complete bio or description',
  social: [
    {name: 'blog', url: 'www.about.me/camilomoal'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Eugenia Rodriguez', 
  photo: '<URL_IMG>', 
  bio: 'Eugenia Rodriguez Bio',
  jobTitle: 'Neuro Branding',
  conferenceTitle: 'Integración del retail tradicional a lo digital.',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://twitter.com/'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Omar Tzompantzi Coyotzi', 
  photo: '<URL_IMG>', 
  bio: 'Omar Tzompantzi Bio',
  jobTitle: 'Cloud architecture',
  conferenceTitle: 'Cloud native',
  description: 'Complete bio or description',
  social: [
   {name: 'instagram', url: 'Instagram: omar_tzco'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Paula Brenes', 
  photo: '<URL_IMG>', 
  bio: 'Paula Brenes Bio',
  jobTitle: 'Directora',
  conferenceTitle: 'Ciencia ficción para la innovación.  ',
  description: 'Complete bio or description',
  social: [
    {name: 'linkedin', url: 'http://linkedin.com/in/paulafbrenesr'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
    {
  name: 'Manuel de Jesús Véliz', 
  photo: '<URL_IMG>', 
  bio: 'Manuel de Jesús Véliz Bio',
  jobTitle: 'Director de informática',
  conferenceTitle: 'Wordpress + AndroidStudio + Firebase',
  description: 'Complete bio or description',
  social: [
    {name: 'linkedin', url: 'http://linkedin.com/in/manuel-de-jesús-veliz-nájera-4b2338a5'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Jennifer Lopez', 
  photo: '<URL_IMG>', 
  bio: 'Jennife Lopez Bio',
  jobTitle: 'Product owner',
  conferenceTitle: 'Blockchain ',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: '@jenniferLopez '},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

   {
  name: 'José Jesús Guzmán Eusebio', 
  photo: '<URL_IMG>', 
  bio: 'José Jesús Guzmán Bio',
  jobTitle: 'Director en tecnología de identidad y biodiversidad',
  conferenceTitle: 'Emprendimiento tecnológico',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://twitter.com/josejesus8'},
    {name: 'linkedin', url: ' https://www.linkedin.com/in/jesus-guzman '}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Maria Rene Torrez Vargas', 
  photo: '<URL_IMG>', 
  bio: 'Maria Rene Torrez Bio',
  jobTitle: 'Profesora de Tecnologia de niños y jovenes',
  conferenceTitle: 'Google Apps Script API for Education',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: '@solorene'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'German Reynaga Araiza', 
  photo: '<URL_IMG>', 
  bio: 'German Reynaga Bio',
  jobTitle: 'Software Engineer',
  conferenceTitle: 'TDD, arquitectura de software, micro servicios',
  description: 'Complete bio or description',
  social: [
   {name: 'facebook', url: 'https://m.facebook.com/german.reynagaaraiza'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Jessica Azcona', 
  photo: '<URL_IMG>', 
  bio: 'Jessica Azcona Bio',
  jobTitle: 'Ingeniería en Tecnologías Computacionales',
  conferenceTitle: 'Empoderando a mujeres en tecnología',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/jessi.azc.9'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

   {
  name: 'Pablo Roberto Gonzalez', 
  photo: '<URL_IMG>', 
  bio: 'Pablo Gonzalez Bio',
  jobTitle: 'Docente universitario',
  conferenceTitle: 'Arduino + Power BI',
  description: 'Complete bio or description',
  social: [
   {name: 'twitter', url: 'https://twitter.com/'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in/pablogonz'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Ximena Cruz', 
  photo: '<URL_IMG>', 
  bio: 'Ximena Cruz Bio',
  jobTitle: 'Project Manangment | Community Lead',
  conferenceTitle: 'Planea Realidades, No fantasías (Metolodgías Ágiles + SCRUM).',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: '@helenismo.reset23'},
    {name: 'twitter', url: '@HelenismoDotNet '}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Magdaleno', 
  photo: '<URL_IMG>', 
  bio: 'Magdaleno Bio',
  jobTitle: 'Software Developer',
  conferenceTitle: 'DevOps',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/magdaleno.ga'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Irene Velasco', 
  photo: '<URL_IMG>', 
  bio: 'Irene Velasco Bio',
  jobTitle: 'Emprendedora',
  conferenceTitle: 'El propósito como el origen del todo. ',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/1r3n3'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Luis Enrique Pinedo', 
  photo: '<URL_IMG>', 
  bio: 'Luis Enrique Pinedo Bio',
  jobTitle: 'Marketing digital y desarrollo',
  conferenceTitle: 'Flutter',
  description: 'Complete bio or description',
  social: [
   {name: 'facebook', url: 'www.facebook.com/jumpercusco'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Fernando Quinteros Gutierrez', 
  photo: '<URL_IMG>', 
  bio: 'Fernando Quinteros Bio',
  jobTitle: 'Web Freelance',
  conferenceTitle: 'React Hooks  ',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://twitter.com/ferkki2'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Jose Rojas', 
  photo: '<URL_IMG>', 
  bio: 'Jose Rojas Bio',
  jobTitle: 'Developer frond-end',
  conferenceTitle: 'tecnologias frond-end para la experienncias de usuario ',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/j.elias1996'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Martin Melo Godínez', 
  photo: '<URL_IMG>', 
  bio: 'Martin Melo Bio',
  jobTitle: 'Fullstack Software Developer',
  conferenceTitle: 'Django o Firebase (tecnologías) autoeducación en el mundo del software ',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/martin.melo.godinez'},
    {name: 'twitter', url: 'https://twitter.com/martinmelo'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Pablo Baeza', 
  photo: '<URL_IMG>', 
  bio: 'Pablo Baeza Bio',
  jobTitle: 'Dev, arquitectura y operaciones',
  conferenceTitle: 'Cloud Native',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'twitter.com/pbaeza'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Erifranck Nuñez', 
  photo: '<URL_IMG>', 
  bio: 'Erifranck Nuñez Bio',
  jobTitle: 'Desarrrollador Frontend',
  conferenceTitle: 'Aplicando Atomic Design con react.',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://twitter.com/@erifranckn'},
    {name: 'instagram', url: 'https://www.instagram.com/erifranck/'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Mauricio Flores Hernández', 
  photo: '<URL_IMG>', 
  bio: 'Mauricio Flores Bio',
  jobTitle: 'Desarrollador de software y estudiante.',
  conferenceTitle: 'Actions on Google',
  description: 'Complete bio or description',
  social: [
   {name: 'twitter', url: 'https://twitter.com/Mau_Hernandez_F?s=08'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Freddy Santacruz', 
  photo: '<URL_IMG>', 
  bio: 'Freddy Santacruz Bio',
  jobTitle: 'Desarrollador de Software ',
  conferenceTitle: 'Uso de pentaho data integration ',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/santacruz.edison'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Eduardo Velez Santiago', 
  photo: '<URL_IMG>', 
  bio: 'Eduardo Velez Bio',
  jobTitle: 'Desarrollo de software',
  conferenceTitle: 'Como usamos React en terapify, desde hacer Server Side Rendering hasta mobile.',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/evsdD'},
    {name: 'linkedin', url: 'www.linkedin.com/in/eddvelezs'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Alvaro Martinez Mancilla', 
  photo: '<URL_IMG>', 
  bio: 'Alvaro Martinez Bio',
  jobTitle: 'Desarrollador móvil & Co-founder AuraSoft',
  conferenceTitle: 'Diseño y desarrollo de aplicaciones con flutter',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/Alvardud'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Max Uribe', 
  photo: '<URL_IMG>', 
  bio: 'Max Uribe Bio',
  jobTitle: 'Software Engineer',
  conferenceTitle: 'Comandos de GNU Linux',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'facebook.com/maxuribealonso'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Javier DN', 
  photo: '<URL_IMG>', 
  bio: 'Javier DN Bio',
  jobTitle: 'Desarrollador Software',
  conferenceTitle: 'Google Smart Home Actions',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: '@whereisjavier'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Rodrigo Quezada', 
  photo: '<URL_IMG>', 
  bio: 'Rodrigo Quezada Bio',
  jobTitle: 'Software Engineer',
  conferenceTitle: 'Terraform + React',
  description: 'Complete bio or description',
  social: [
   {name: 'twitter', url: 'https://twitter.com/rodikana'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Marlon Israel Nuño Rodríguez', 
  photo: '<URL_IMG>', 
  bio: 'Marlon Israel Nuño Bio',
  jobTitle: 'Software Engineer & Emprendedor Social',
  conferenceTitle: 'Design Thinking, emprendimiento, Inteligencia Artificial en el Derecho',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://www.facebook.com/cornamentaNuno'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Mikee Ramirez', 
  photo: '<URL_IMG>', 
  bio: 'Mikee Ramirez Bio',
  jobTitle: 'Head of engineering in Nowports',
  conferenceTitle: 'Como trabajar en una startup y sobrevir en el intento',
  description: 'Complete bio or description',
  social: [
    {name: 'instagram', url: 'https://www.instagram.com/mikeermz'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

   {
  name: 'Guilherme Fernandes Neto', 
  photo: '<URL_IMG>', 
  bio: 'Guilherme Fernandes Neto Bio',
  jobTitle: 'Programacao e robotica',
  conferenceTitle: 'A.I ',
  description: 'Complete bio or description',
  social: [
    {name: 'linkedin', url: 'https://www.linkedin.com/in/guilherme-fernandes-neto-90b852147'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
}, 

{
  name: 'Edwin Alberto Castañeda García', 
  photo: '<URL_IMG>', 
  bio: 'Edwin Alberto Castañeda García Bio',
  jobTitle: 'Emprendedor & Programador',
  conferenceTitle: 'Taller de Introducción a Raspberry Pi: sensor y LED',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'facebook.com/computaccion'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Esteban Dalel R', 
  photo: '<URL_IMG>', 
  bio: 'Esteban Dalel R Bio',
  jobTitle: 'Developer',
  conferenceTitle: 'NextJS: haciendo React más fácil',
  description: 'Complete bio or description',
  social: [
   {name: 'twitter', url: 'https://twitter.com/estebandalelr'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},

{
  name: 'Ivan Medina', 
  photo: '<URL_IMG>', 
  bio: 'Ivan Medina Bio',
  jobTitle: 'Software Engineer',
  conferenceTitle: 'React + Testing + JavaScript + GraphQL',
  description: 'Complete bio or description',
  social: [
    {name: 'twitter', url: 'https://twitter.com/ivandevp'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Alfredo Gallardo', 
  photo: '<URL_IMG>', 
  bio: 'Alfredo Gallardo Bio',
  jobTitle: 'Desarrollo de videojuegos, VR, AR.',
  conferenceTitle: 'Videojuegos en Unreal Engineer',
  description: 'Complete bio or description',
  social: [
    {name: 'facebook', url: 'https://facebook.com/fockagames/?locale2=es_LA'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Marcelo Adriano Barbosa Junior', 
  photo: '<URL_IMG>', 
  bio: 'Marcelo Adriano Barbosa Bio',
  jobTitle: 'Tech Lead Mobile',
  conferenceTitle: 'Desarrollo móvil asequible: creación de aplicaciones para personas con discapacidad visual.',
  description: 'Complete bio or description',
  social: [
    {name: 'linkedin', url: 'https://br.linkedin.com/in/mabarbosajr'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
},
{
  name: 'Santiago Garcia da Rosa', 
  photo: '<URL_IMG>', 
  bio: 'Santiago Garcia da Rosa Bio',
  jobTitle: 'CTO at Nowports',
  conferenceTitle: 'Clean Code in JS (buenas practicas de programacion)',
  description: 'Complete bio or description',
  social: [
    {name: 'medium', url: 'https://medium.com/@santiagogarcadarosa'},
    {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
  ], // Accept any Social Network in FontAwesome Icons 
} 
] 
};

export default App;
