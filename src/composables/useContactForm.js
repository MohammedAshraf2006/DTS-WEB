import { ref } from 'vue';

export function useContactForm() {
  const form = ref({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const errors = ref({});
  const isSubmitting = ref(false);
  const showSuccess = ref(false);

  const validateForm = () => {
    errors.value = {};
    let isValid = true;

    if (!form.value.name) {
      errors.value.name = 'الاسم مطلوب';
      isValid = false;
    }

    if (!form.value.phone) {
      errors.value.phone = 'رقم الهاتف مطلوب';
      isValid = false;
    } else if (!/^\d+$/.test(form.value.phone)) {
      errors.value.phone = 'يجب أن يحتوي الهاتف على أرقام فقط';
      isValid = false;
    }

    if (!form.value.email) {
      errors.value.email = 'البريد الإلكتروني مطلوب';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
      errors.value.email = 'بريد إلكتروني غير صالح';
      isValid = false;
    }

    if (!form.value.message) {
      errors.value.message = 'الرسالة مطلوبة';
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    isSubmitting.value = true;

    // Simulate API call
    setTimeout(() => {
      isSubmitting.value = false;
      showSuccess.value = true;
      form.value = { name: '', phone: '', email: '', message: '' };
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    }, 1500);
  };

  return {
    form,
    errors,
    isSubmitting,
    showSuccess,
    handleSubmit
  };
}