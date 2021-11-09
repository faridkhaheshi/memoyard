import styles from "./AddButton.module.scss"

const AddButton = () => {
  return (
    <form className={styles.addButtonContainer}>
      <label htmlFor="add-input">+</label>
      <input type="file" id="add-input" />
    </form>
  )
}

export default AddButton
