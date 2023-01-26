const mongoose=require('mongoose');
const User=require('../models/User');

const url='mongodb://127.0.0.1:27017/test';

beforeAll(async()=>{
    await mongoose.connect(url, {
        
    })
});
afterAll(async()=>{
    await mongoose.connection.close();
})

//register testing
describe(' testanything', ()=>{
    it('test', ()=>{
        const userT={
            username: "eren",
            password: "eren",
            email: "eren@gmail.com",
            profile: "",
            isAdmin: ""    
        }
        return User.create(userT).then((pro_ret)=>{
            expect(pro_ret.username).toEqual("eren")
        })
    })
})

