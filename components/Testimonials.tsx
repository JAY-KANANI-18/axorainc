import React from "react";

const TestimonialCard = ({
  quote,
  name,
  position,
  avatar,
}: {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold text-secondary-800">{name}</h4>
          <p className="text-sm text-secondary-500">{position}</p>
        </div>
      </div>
      <p className="text-secondary-700 italic">"{quote}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Axora Technologies transformed our customer management process. Their CRM solution is intuitive, powerful, and has significantly improved our sales performance."
            name="Sarah Johnson"
            position="CEO, TechStart Inc."
            avatar="https://randomuser.me/api/portraits/women/32.jpg"
          />

          <TestimonialCard
            quote="The booking system developed by Axora has eliminated scheduling conflicts and reduced no-shows by 75%. It's been a game-changer for our service business."
            name="Michael Chen"
            position="Operations Director, ServicePro"
            avatar="https://randomuser.me/api/portraits/men/46.jpg"
          />

          <TestimonialCard
            quote="Implementing Axora's AI chatbot has allowed us to provide 24/7 customer support without increasing our team size. The ROI has been incredible."
            name="Jessica Williams"
            position="Customer Success Manager, RetailPlus"
            avatar="https://randomuser.me/api/portraits/women/65.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
