import { Article, Button, Img, ImgWrapper } from './styles'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from './Hook/useLocalStorage'
import { useNearScreen } from './Hook/useNearScreen';


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {

    const key = `like-${id}`
    const [liked, setLiked ] = useLocalStorage(key, false)
    const [show, element] = useNearScreen()
  
   const Favorite = liked ? MdFavorite : MdFavoriteBorder

    return (
        <Article ref={element}>
          {
              show && <>
              <a href={`/detail/${id}`} >
                <ImgWrapper>
                    <Img src={src} alt="detail"/>
                </ImgWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Favorite/> {likes} likes!
            </Button>
              </>
          }

        </Article>
    )
}
