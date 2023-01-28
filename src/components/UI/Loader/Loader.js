import classes from '../Loader/Loader.module.scss'

const Loader = props => {
  return(
    <div className={classes.center}>
      <div className={classes.Loader}>
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader