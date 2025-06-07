const handleSubmit = async (e) => {
  e.preventDefault();

  if (!token) {
    alert("Te rog să confirmi că ești om.");
    return;
  }

  const form = e.target;
  const formData = new FormData(form);

  const data = {
    nume: formData.get("nume"),
    email: formData.get("email"),
    mesaj: formData.get("mesaj"),
    captcha_token: token,
  };

  try {
    const response = await fetch("https://stoplipovon-contact.manoroth.workers.dev/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
      setToken("");
    } else {
      setStatus("error");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setStatus("error");
  }
};
