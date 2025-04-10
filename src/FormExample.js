import { 
    TextField, 
    Checkbox, 
    FormControlLabel, 
    Radio, 
    RadioGroup,
    Switch,
    Slider
  } from '@mui/material';
  
  export default function FormExample() {
    return (
      <div>
        <TextField 
          label="Name" 
          variant="outlined" 
          fullWidth 
          margin="normal"
        />
        
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Accept terms and conditions"
        />
        
        <RadioGroup name="radio-buttons-group">
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
        
        <FormControlLabel 
          control={<Switch defaultChecked />} 
          label="Dark Mode" 
        />
        
        <Slider
          defaultValue={30}
          aria-label="Volume"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
      </div>
    );
  }