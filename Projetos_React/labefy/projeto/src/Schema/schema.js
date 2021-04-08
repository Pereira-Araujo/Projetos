import * as Yup from 'yup';

export default Yup.object().shape({
  playlistName: Yup.string().min(2).required(),
});