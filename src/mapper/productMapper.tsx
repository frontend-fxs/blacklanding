import { SignalLandingProduct, SignalLandingProductResponse } from '../models/signalLanding';
const mapToProduct = (responseProduct: SignalLandingProductResponse) => {
  const result: SignalLandingProduct = {
    Id: responseProduct.Id,
    Name: responseProduct.Name,
    Description: responseProduct.Description,
    Price: responseProduct.Price,
    Saved: responseProduct.Saved,
    DataGtmId: responseProduct.DataGtmId,
    IsFxsChoice: responseProduct.IsFxsChoice,
    ButtonUrl: responseProduct.ButtonUrl,
    IsBig: false,
    Saving: responseProduct.Saved > 0 ? `${responseProduct.Saved}% Savings!` : '',
    MonthlyPrice: responseProduct.MonthlyPrice,
    Promotion: 'BlackFriday',
  };
  return result;
};
export default mapToProduct;
