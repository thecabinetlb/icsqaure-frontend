<script setup>
import axios from 'axios';
import { ref, reactive, watch } from 'vue'
// import {Checkbox, useRecaptchaProvider} from 'vue-recaptcha'
// useRecaptchaProvider() 
import { VueRecaptcha } from 'vue-recaptcha';
defineProps({
    data: Array
})
const sitekey = import.meta.env.VITE_RECAPTCHAV2_SITEKEY;
const baseurl = import.meta.env.VITE_BASE_URL;

const recaptcha = ref()
const reCaptchaValid = ref(false)
console.log('reCaptchaValid', reCaptchaValid.value)
const hasErrorMessages = ref(false)
const loading = ref(null)
console.log('hasErrorMessages', hasErrorMessages)

const onVerify = (response) => {
  reCaptchaValid.value = true; // Set to true when verified
};

const onExpired = () => {
  reCaptchaValid.value = false; // Reset if expired
};
const errors = {
  TitleRequired: 'Title is required.',
  NameRequired: 'Name is required.',
  EmailRequired: 'Email is required.',
  EmailInvalid: 'Please specify a real email.',
  CountryRequired: 'Country Name is required.',
  CityRequired: 'City Name is required.',
  IndustryRequired: 'Industry is required.',
  PhoneRequired: 'Phone Number is required.',
  PhoneInvalid: 'Phone Number should be numeric.',
  IndustryInvalid: 'Invalid industry. Please select either Smart Cities or Food and Beverage',
  MessageRequired: 'Please enter your message.'
};

const ErrorMessages = ref({
    title: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    industry: '',
    company_name: '',
    message: ''
})
console.log('ErrorMessages',ErrorMessages)

const formData = reactive({ 
    data: { 
        Title : {
            name: 'Title',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },            
        Name : {
            name: 'Name',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },        
        CompanyName : {
            name: 'CompanyName',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },
        Phone : {
            name: 'Phone',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },            
        Email : {
            name: 'Email',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },            
        Country : {
            name: 'Country',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },
        City : {
            name: 'City',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },
        Industry : {
            name: 'Industry',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,
        },
        Message : {
            name: 'Message',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        }
    },
    isValid: false
});
console.log('formData',formData)
console.log('formData.isValid',formData.isValid)


const validateField = (field) => {
    if (field.required && !field.value) {
        field.isValid = false;
        field.validationMessage = errors[`${field.name}Required`];
    } else if (field.name === 'Email' && field.value && !isEmailValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.EmailInvalid;
    } else if (field.name === 'Phone' && field.value && !isPhoneValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.PhoneInvalid;
    } else {
        field.isValid = true;
        field.validationMessage = '';
    }
};

const isEmailValid = (email) => {
    // Add your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
};
const isPhoneValid = (phone) => {
    // Add your phone validation logic here
    return /^[0-9]+$/.test(phone);
};

// Watch for changes in form data
watch(formData, (newFormData) => {
    let allFieldsValid = true;
    for (const key in newFormData.data) {
        validateField(newFormData.data[key])
        if (!newFormData.data[key].isValid) {
            allFieldsValid = false;
        }
    }
    formData.isValid = allFieldsValid;
    formData.value = newFormData.value
    console.log('watcher data',formData)
}, { deep: true });

const handleSubmit = () => {
    if (reCaptchaValid.value === false) {
        console.log('ReCaptcha is invalid');
        return; // Don't proceed with form submission
    }
    loading.value = true;
    if (formData.isValid) {
        // Create a new data object with the data to be sent
        const data = {
            title: formData.data.Title.value,
            name: formData.data.Name.value,
            company_name: formData.data.CompanyName.value,
            email: formData.data.Email.value,
            phone: formData.data.Phone.value,
            country: formData.data.Country.value,
            city: formData.data.City.value,
            industry: formData.data.Industry.value,
            message: formData.data.Message.value
        };
        // Submit the data
        axios.post(`${baseurl}/api/v1/contact_submissions`, data, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Replace * with the specific origin if needed
            }
        }).then(response => {
            console.log('Data submitted:', response.data);
             loading.value = false;
        }).catch(error => {
            console.error('Errors:', error.response.data.errors);
            hasErrorMessages.value = true;
            ErrorMessages.value = error.response.data.errors;
            loading.value = false;
        });
        // Clear form inputs
        formData.data.value = {
            Title: '',
            Name: '',
            Email: '',
            CompnayName: '',
            Phone: '',
            Country: '',
            City: '',
            Industry: '',
            Message: ''
        };
    } 
};
</script>

<template>
    <section id="contact" class="flex flex-wrap items-center justify-between w-10/12 h-full gap-10 py-20 mx-auto lg:gap-0">
        <div class="flex flex-col w-full h-full gap-6 lg:w-6/12">
            <h1 class="text-accent1 uppercase 2xl:text-6xl xl:text-5xl sm:text-6xl text-4xl font-[500]">Contact Us. <br/>It’s Easy.</h1>
            <p class="font-[400] text-justify text-accent2 lg:w-3/4">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
            <div class="flex flex-wrap items-center justify-between w-full gap-3 lg:flex-col">
                <div v-for="(item, key) in data" :key="key" class="flex items-center gap-2 md:flex-1 lg:w-full group">
                    <img :src="item.icon" :alt="item.name" width="53" height="53" center cover responsive loading="lazy"/>
                    <div class="w-full max-h-[53px]">
                        <h3 class="font-[400] text-accent2">{{ item.name }}</h3>
                        <p class="font-[500] max-sm:w-3/4 text-justify text-accent1 group-hover:brightness-125">{{ item.content }}</p>
                    </div>
                </div>                    
            </div>
        </div>
        <form class="grid w-full h-full grid-cols-2 gap-3 lg:w-5/12" @submit.prevent="handleSubmit">
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Name" name="Name"
                placeholder="Your Name" 
                v-model="formData.data.Name.value"
                :required="formData.data.Name.required" 
                class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px]"
                :class="{'border-red-500 focus:border-red-500' : formData.data.Name.isValid===false}">
                <p v-show="!formData.data.Name.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Name.validationMessage}}</p>
            </div>
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Email" name="Email"
                placeholder="example@gmail.com" 
                v-model="formData.data.Email.value" 
                :required="formData.data.Email.required" 
                class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px]"
                :class="{'border-red-500 focus:border-red-500' : formData.data.Email.isValid===false}">
                <p v-show="!formData.data.Email.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Email.validationMessage}}</p>
            </div>      
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Phone" name="Phone" 
                placeholder="00961 71 654 231" 
                v-model="formData.data.Phone.value"          
                :required="formData.data.Phone.required" 
                class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px]"
                :class="{'border-red-500 focus:border-red-500' : formData.data.Phone.isValid===false}">
                <p v-show="!formData.data.Phone.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Phone.validationMessage}}</p>
            </div> 
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="CompanyName" name="CompanyName" 
                placeholder="Your Company's Name"
                v-model="formData.data.CompanyName.value"              
                :required="formData.data.CompanyName.required" 
                class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px]"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.CompanyName.isValid===false}">
                <p v-show="!formData.data.CompanyName.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.CompanyName.validationMessage}}</p>
            </div>    
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Country" name="Country"  aria-label="Enter your Country"
                placeholder="Your Country"
                v-model="formData.data.Country.value"              
                :required="formData.data.Country.required" 
                class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px]"
                :class="{'border-red-500 focus:border-red-500' : formData.data.Country.isValid===false}">
                <p v-show="!formData.data.Country.isValid" class="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Country.validationMessage}}</p>
            </div>    
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="City" name="City"  aria-label="Enter your City"
                placeholder="Your City"
                v-model="formData.data.City.value"              
                :required="formData.data.City.required" 
                class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px]"
                :class="{'border-red-500 focus:border-red-500' :  formData.data.City.isValid===false}">
                <p v-show="!formData.data.City.isValid" class="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.City.validationMessage}}</p>
            </div>  
            <div class="relative w-full col-span-2">
                <select id="industry" name="Industry" aria-label="Select an industry"
                    placeholder="Select an industry"
                    v-model="formData.data.Industry.value"              
                    :required="formData.data.Industry.required" 
                    class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px] text-gray-400"
                    :class="{'border-red-500 focus:border-red-500' : formData.data.Industry.isValid === false}">
                    <option disabled value="" class="text-black">Select an industry</option>
                    <option value="Smart Cities" class="text-black">Smart Cities</option>
                    <option value="Food and Beverage" class="text-black">Food and Beverage</option>
                    <option value="Manufacturing" class="text-black">Manufacturing</option>
                    <!-- <option value="Oil and Gas" class="text-black">Oil and Gas</option> -->
                    <option value="Energy" class="text-black">Energy</option>
                    <option value="Water and Wasterwater" class="text-black">Water and Wasterwater</option>
                    <option value="Metal, Mining and Minerals" class="text-black">Metal, Mining and Minerals</option>
                </select>
                <!-- Arrow icon -->
                <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg class="w-5 h-5 text-accent1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
              <p v-show="!formData.data.Industry.isValid" class="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Industry.validationMessage}}</p>
            </div>
            <div class="w-full col-span-2">
                <textarea id="Message" name="Message" rows="5" 
                placeholder="Briefly tell us about your project and your current goals. How can we help you?" 
                v-model="formData.data.Message.value" 
                :required="formData.data.Message.required" 
                class="w-full p-3 border bg-accent1 border-accent2 rounded-[8px]"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.Message.isValid===false}"></textarea>
                <p v-show="!formData.data.Message.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Message.validationMessage}}</p>
            </div>
            <!-- Recaptchs -->
            <div class="w-full col-span-2">
                <vue-recaptcha 
                    ref="recaptcha" 
                    :sitekey="sitekey"
                    @verify="onVerify"
                    @expired="onExpired"
                    theme="dark"
                ></vue-recaptcha>
            </div>
            <!-- Submit -->
            <div class="flex flex-wrap items-center w-full gap-2">
                <button aria-label="send your message"class="cursor-pointer p-3 w-fit font-[400] text-center text-accent1 rounded-[8px] shadow-sm bg-primary hover:brightness-125">
                {{loading === true ?  'Sending...' : 'Send Message'}}
                </button>            
                <p v-if="loading === false" class="text-green-500">Thank you for your message, we'll get back to you soon.</p>                
            </div>

            <!-- Errors after submit -->
            <ul v-if="hasErrorMessages === true" class="p-4 list-disc bg-red-200 border-b-red-600 border-b-s-4 marker:text-red-600" role="list">
                <li v-for="(item, key) in ErrorMessages" :key="key" className="list-item mx-2">{{ item[0] }}</li>
            </ul>
        </form>
    </section>
</template>
