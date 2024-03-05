import './practice.css';
export default function Practice({ text, color = 'default', size = 'normal' }) { 
  return <button className={`practice ${color} ${size}`}>{text}</button>;
}