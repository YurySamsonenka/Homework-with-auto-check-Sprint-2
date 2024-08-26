import s from './Loader.module.css'
import gif from './6.gif'

export const Loader = () => <div className={s.loader}>
	<img src={gif} alt="loader" />
</div>
