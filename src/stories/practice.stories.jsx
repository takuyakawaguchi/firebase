import Practice from "./practice";
export default{
    component:Practice,
    title:"practice",
};

// export const Hello =() =><Practice text={"Hello"} size="normal"/>;
// export const Test =() =><Practice text={"smallBotton"} color="primary"size="small"/>;
// export const Test2 =() =><Practice text={"bigBotton"} color="secondary"size="big"/>;

const Template=(args) =><Practice {...args}/>
export const normal = Template.bind({});
normal.args = {
     text:'Hello',
     size:'normal',
};
export const small = Template.bind({});
small.args = {
     text:'small',
     color:'primary',
     size:'small',
};
export const big = Template.bind({});
big.args = {
     text:'big',
     color:'secondary',
     size:'big',
};