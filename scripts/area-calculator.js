function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base= parseFloat(baseValueText);
    
    const heightField = document.getElementById('triangle-height');
    const heightValueText= heightField.value;
    const height= parseFloat(heightValueText);

    console.log(base,height);
}  