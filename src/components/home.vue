<template>
	<div class="home">
		<div id="twiBox">
			<textarea class="form-control" rows="4" placeholder="写点啥吧？" id="twitter" v-model="twi"></textarea>
			<button class="btn btn-default post" @click="twit()">推</button>
		</div>
		<div class="cardBox">
			<div v-for="item in renderArray" class="item">
	    	<router-link class="users" :to="{name:'profile',params:{id:item.username}}">{{item.username}}:</router-link>
	    	<p class="content"><span class="quoteLeft"></span>{{item.content}}</p>
	    	<span class="quoteRight"></span>
	    	<span class="date">{{turnToDate(item.date)}}</span>
	  	</div>
		</div>
	</div>
</template>


<script>
	export default {
		data (){
			return {
				renderArray:'',
				twi:''
			}
		},
		methods:{
			twit:function(){
				//{date:'',content:'',time:''}
				let date = new Date().getTime()
				let content = this.twi
				let username = currentUser.username
				currentUser.twis.push({date,content,username})
				db.users[sessionStorage.userNumber] = currentUser
				saveCache()
				saveDB()
				this.twi = ''
				this.getRenderArray()
			},
			turnToDate:function(date){
				return turnDate(date)
			},
			getRenderArray:function(){
				let renderArray = currentUser.twis
				for(let i=0; i<currentUser.follow.length; i++){
					for(let j=0; j<db.users.length; j++){
						if(db.users[j].username===currentUser.follow[i]){
							renderArray=renderArray.concat(db.users[j].twis)
							break
						}
					}
				}
				this.renderArray =  bubbleSort(renderArray)
			}
		},
		mounted:function(){
			initDB()
			initCache()
			this.getRenderArray()

		}
	}
</script>

<style scoped>
	#twiBox{
		position:absolute;
		width:30%;
		right:5em;
		top:5em;
	}
	#twitter{
		width:100%;
	}
	.post{
		display:block;
		float:right;
		margin-top:1em;
		font-family:"Microsoft YaHei","微软雅黑",Arial;
	}
	.cardBox{
		width:60%;
		margin:1em;
	}
	.item{
		padding:2em 1em;
		font-size:16px;
		border-bottom: 1px solid #EFF2F7;
		overflow: hidden;
	}
	.users{
		text-decoration: none;
		color:#1D8CE0;
	}
	.date{
		display:block;
		font-size:14px;
		float:right;
		clear:both;
	}
	.quoteLeft,.quoteRight{
		display:inline-block;
		width:2em; height:2em;
		padding:1em;
	}
	.quoteLeft{
		background:url("../assets/quoteLeft.png") no-repeat center;
		vertical-align: text-bottom;
		background-size: 100%;
		background-origin:content-box;
	}
	.quoteRight{
		display:block;
		background:url("../assets/quoteRight.png") no-repeat center;
		vertical-align: text-top;
		background-size: 100%;
		background-origin:content-box;
		margin-right:1em;
		float:right;
	}
</style>
