import "./collectionPage.style.scss"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectShopDataCollection } from "../services/redux/shopDataSelector";
import CollectionItem from "../components/collection-item/collectionItem";

export default function CollectionPage() {
    const params = useParams();
    const collection = useSelector(state => selectShopDataCollection(state , params.collectionId))

    const {title , items} = collection

    return (
        <>
            <div className = "collection-page">
                <h2>{title}</h2>
                <div className = 'items'>
                    {
                        items.map(item => <CollectionItem key = {item.id} item = {item} />)
                    }
                </div>
            </div>
        </>
    )
}