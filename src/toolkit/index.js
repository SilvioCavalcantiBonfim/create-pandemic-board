import Color from "color";

const DarkenColor = (color, intence) => {
    let CurrentColor = new Color(color).rgb(); 
    return (intence === 0)?'#FFFFFF':new Color(CurrentColor.color.map(e => e/intence)).hex().toString();
}

export default DarkenColor;