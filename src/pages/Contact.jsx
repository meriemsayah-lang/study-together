import "../styles/Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTelegram,
} from "react-icons/fa";


function Contact() {

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");


  // =========================
  // Send Email Only
  // =========================
  const sendMessage = async (e) => {

    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.target;


    try {

      await emailjs.sendForm(
        "service_dp4eqzk",
        "template_70m86lf",
        form,
        "TdQhtzaT4-IxXRSSM"
      );


      setStatus("تم إرسال الرسالة بنجاح ✅");

      form.reset();


    } catch (error) {

      console.error("EmailJS Error:", error);

      setStatus("حدث خطأ أثناء الإرسال ❌");

    }


    setLoading(false);

  };



  return (

    <section className="contact">


      <div className="contact-header">

        <h1>
          تواصل معي
        </h1>


        <p>
          إذا كان لديك سؤال، اقتراح، أو ملاحظة،
          يسعدني التواصل معك والإجابة على استفساراتك.
        </p>

      </div>





      <div className="contact-container">



        {/* Contact Form */}

        <form
          className="contact-form"
          onSubmit={sendMessage}
        >


          <input
            type="text"
            name="user_name"
            placeholder="الاسم"
            required
          />



          <input
            type="email"
            name="user_email"
            placeholder="البريد الإلكتروني"
            required
          />



          <input
            type="text"
            name="subject"
            placeholder="الموضوع"
            required
          />



          <textarea
            name="message"
            rows="6"
            placeholder="اكتب رسالتك هنا..."
            required
          ></textarea>




          <button
            type="submit"
            disabled={loading}
          >

            <FaPaperPlane />


            {
              loading
                ? "جاري الإرسال..."
                : "إرسال الرسالة"
            }


          </button>




          {
            status && (

              <p className="form-status">
                {status}
              </p>

            )
          }



        </form>







        {/* Contact Information */}


        <div className="contact-info">






          <div className="info-card">


            <FaEnvelope className="info-icon" />


            <h3>
              البريد الإلكتروني
            </h3>


            <p>
              studytogether@gmail.com
            </p>


          </div>







          {/* Telegram Channel Link Only */}

          <div className="info-card">


            <a

              href="https://t.me/bac2026weca"

              target="_blank"

              rel="noreferrer"

              className="telegram-link"

            >


              <FaTelegram className="info-icon" />


              <h3>
                Telegram
              </h3>


              <p>
                @BAC_Academy
              </p>



            </a>


          </div>








          <div className="info-card">


            <FaMapMarkerAlt className="info-icon" />


            <h3>
              الموقع
            </h3>


            <p>
              سطيف، الجزائر
            </p>


          </div>





        </div>


      </div>







      <div className="feedback">


        <h2>
          رأيك يهمني!
        </h2>



        <p>

          إذا كانت لديك فكرة، أو اقتراح، أو لاحظت أي خطأ في المنصة،
          فلا تتردد في التواصل معي.
          أؤمن أن كل رأي وملاحظة يساهمان في تطوير

          <strong>
            {" "}Study Together{" "}
          </strong>

          وتحسين تجربة استخدامها.

        </p>





        <p>

          هدفي هو الاستمرار في تطوير المنصة وإضافة محتوى وميزات جديدة
          تساعد طلاب البكالوريا على التعلم بطريقة أسهل وأكثر تنظيمًا.
          شكرًا لك على وقتك ودعمك، فمساهمتك تصنع فرقًا حقيقيًا.

        </p>


      </div>




    </section>

  );

}


export default Contact;