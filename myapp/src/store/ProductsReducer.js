const defaultState = [
  {
    id: 1,
    title: 'Bicycle',
    count: 5,
    img: 'https://photosfine.files.wordpress.com/2012/04/bicycle-3.jpg',
  },
  {
    id: 2,
    title: 'Scooter',
    count: 4,
    img: 'https://img.freepik.com/premium-photo/white-modern-eco-electric-kick-scooter-white-background-3d-rendering_476612-13501.jpg',
  },
  {
    id: 3,
    title: 'Dumbbells',
    count: 7,
    img: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1600,b_rgb:ffffff/catalog/Conditioning/Strength%20Equipment/Dumbbells/XX17983/XX17983-H_dneu0o.png',
  },
  {
    id: 4,
    title: 'Rackets',
    count: 1,
    img: 'https://t3.ftcdn.net/jpg/02/70/35/12/360_F_270351278_DcM5yXHOi24uSdpXC8eQ2svwsIV74Cp8.jpg',
  },
];

const DECR_BY_PAYLOAD = 'DECR_BY_PAYLOAD';
const INCR_BY_PAYLOAD = 'INCR_BY_PAYLOAD';
const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DECR_BY_PAYLOAD:
      return state
        .map(elem => {
          if (elem.id === action.payload) {
            return {
              ...elem,
              count: elem.count - 1,
            };
          }
          return elem;
        })
        .filter(elem => elem.count !== 0);

    case INCR_BY_PAYLOAD:
      return state.map(elem => {
        if (elem.id === action.payload) {
          return {
            ...elem,
            count: elem.count < 25 ? elem.count + 1 : elem.count,
          };
        }
        return elem;
      });

    case ADD_NEW_PRODUCT:
      const [title, img] = action.payload.split(' ');

      const newProduct = {
        id:
          Math.max(...state.map(elem => elem.id)) + 1 === -Infinity
            ? 1
            : Math.max(...state.map(elem => elem.id)) + 1,
        title,
        count: 1,
        img,
      };
      return [...state, newProduct];

    default:
      return state;
  }
};
export const decrByPayloadAction = payload => ({
  type: DECR_BY_PAYLOAD,
  payload,
});
export const incrByPayloadAction = payload => ({
  type: INCR_BY_PAYLOAD,
  payload,
});
export const addNewProductAction = payload => ({
  type: ADD_NEW_PRODUCT,
  payload,
});
