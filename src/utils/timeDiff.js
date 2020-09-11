import moment from 'moment';

export default (startTime, endTime) => {
  const diff = moment(endTime).diff(moment(startTime));
  const diffMinute = diff / (100 * 60);
  const hours = Math.floor(diffMinute / 60);
  const minute = diffMinute % 60;
  let result = '';
  console.log(hours, minute);
  if(hours > 0){
    result = result + hours + 'h';
  }
  if(minute > 0){
    result = result + minute + 'min';
  }
  return result;
}