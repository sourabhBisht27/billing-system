export const getProductByIdValidator = (params) => {
  if (!params.productId || typeof params.productId !== "string") {
    throw new Error("PRODUCTID_INVALID");
  }

  return { productId: params.productId };
};
