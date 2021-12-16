import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../styles/calendario.module.scss'
import 'smart-webcomponents-react/source/styles/smart.default.css';


//Dynamically import the Smart.Scheduler component
const Scheduler = dynamic(() => import('smart-webcomponents-react/scheduler'), {
  ssr: false, //no server-side rendering 
})

function Calendario() {
  const today = new Date(),
    todayDate = today.getDate(),
    currentYear = today.getFullYear(),
    currentMonth = today.getMonth(),
    dataSource = [
      {
        label: 'Vacinar as vacas',
        dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
        dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
        backgroundColor: '#E67C73'
      }, {
        label: 'Visita ao frigorifico',
        dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
        dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
        backgroundColor: '#8E24AA'
      }, {
        label: 'Tirar folga',
        dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
        dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
        backgroundColor: '#039BE5'
      }
    ],
    currentTimeIndicator = true,
    shadeUntilCurrentTime = true,
    view = 'month',
    views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth'],
    firstDayOfWeek = 1;

  return (
    <div className={styles.container}>
      <Head>
        <title>Caledario</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          O seu calendario
        </h1>
        <Scheduler className={styles.scheduler} id="scheduler" currentTimeIndicator={currentTimeIndicator} shadeUntilCurrentTime={shadeUntilCurrentTime} dataSource={dataSource} view={view} views={views} firstDayOfWeek={firstDayOfWeek}></Scheduler>
      </main>
    </div>
  );
}

export default Calendario;