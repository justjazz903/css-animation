import styles from './Button.module.css'

export default function Button({href, text}: {href: string, text: string}) {
  return (
    <div className='flex'>
      <a href={href} className={styles.custom_button}>
        <span className={styles.custom_button_bg}></span>
        {text}
      </a>
    </div>
  )
}