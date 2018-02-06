export default {
  SET_PRODUCT_TITLE (state, title) {
    state.product.title = title
  },

  SET_PRODUCT_DESCRIPTION (state, description) {
    state.product.description = description
  },

  SET_PRODUCT_PRICE (state, price) {
    state.product.price = price
  },

  SET_IS_EDIT_PRODUCT_VISIBLE (state, isEditProductVisible) {
    state.product.meta.isEditProductVisible = isEditProductVisible
  },

  RESET_PRODUCT (state) {
    state.product.title = ''
    state.product.description = ''
    state.product.price = null
  }
}
