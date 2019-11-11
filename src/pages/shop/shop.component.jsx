import React from "react";
import "./shop.styles.scss";
import SHOP_DATA from "./shop.data";
import { PreviewComponent } from "../../components/preview-component/preview-component.component";

export class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionItems }) => (
          <PreviewComponent key={id} {...otherCollectionItems} />
        ))}
      </div>
    );
  }
}
