import Link from 'next/link'
import styles from '../styles/A.module.css'

const A = ({ href, text }) => {
	return (
		<Link href={href} className={styles.link}>
			{text}
		</Link>
	)
}

export default A
