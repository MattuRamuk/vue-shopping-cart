import _products from '../../data/products'

const state = {
    products : []
}

const mutations = {
    'SET_PRODUCTS'(state, payload) {
        state.products = payload
    }
}

const actions = {
    initProducts : ({ commit }) => {
        commit('SET_PRODUCTS', _products)
    }
}

const getters = {
    getProducts : state => {
        return state.products
    }
}

export default {
    actions,
    getters,
    mutations,
    state
}