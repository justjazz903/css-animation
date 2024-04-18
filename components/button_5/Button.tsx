import styles from './Button.module.css'

export default function Button({href, text}: {href: string, text: string}) {
  return (
    <a href={href} className={styles.custom_button}>
      {text}
    </a>
  )
}