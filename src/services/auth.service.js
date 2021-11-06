const jwt = require('JsonWebToken')
const user = require('../models/user')
const bcrypt = require('bcrypt')
const msg = require('../helpers/messages')

const authService = {
    signToken: async(id)=>{
        return jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: 68 * 60 *24
        })
    },
    login: async (data) =>{
        try{
            const{email, password} = data
            let userExists = await user.findOne({email:email}, 'name email password').exec()
            if(await bcrypt.compare(password, userExists.password).then(res=>res)){
                const token = await this.signToken(userExists.id)
                return {
                    code: 200,
                    token
                }
            }else{
                return msg.authFailed
            }
        }catch (error){
            return error
        }
    },
    register: async ()=>{
        try{
            let hash = await bcrypt.hash(userData.password, 10).then(res => res)
            userData.password = hash
            await userData.save()
            let token = await this.signToken(userData.id)
            return{
                code: 200,
                token
            }
        }catch(error){
            return error
        }

    }
}

module.exports = authService