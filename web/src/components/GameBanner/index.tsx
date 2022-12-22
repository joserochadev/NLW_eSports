import {A} from './style'

interface props{
  // url: string;
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function Gamebanner(props : props){
  return(
    <A href="">
          <img src={props.bannerUrl} alt=""/>

          <div>
            <strong>{props.title}</strong>
            <span>{props.adsCount} anúncio(s)</span>
          </div>
    </A>
  )
}