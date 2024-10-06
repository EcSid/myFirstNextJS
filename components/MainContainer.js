import Head from 'next/head'
import A from './A'

const MainContainer = ({ children, keywords }) => {
	return (
		<>
			<Head>
				<meta keywords={`myfirst nextjs ${keywords}`}></meta>
				<title>MyNextJs</title>
			</Head>
			<nav className='nav'>
				<A href='/users' text='Пользователи' />
				<A href='/' text='Главная' />
			</nav>
			<div>{children}</div>
		</>
	)
}

export default MainContainer
