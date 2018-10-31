<?php

namespace FrontendBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => false,
                'required' => true,
//                'attr'   =>  [
//                    'class'   => 'form__input form__input--line--one',
//                    'id' => 'name-field'
//                ]
            ])
            ->add('surname', TextType::class, [
                'label' => false,
                'required' => true,
//                'attr'   =>  [
//                    'class'   => 'form__input form__input--line--one',
//                    'id' => 'name-field'
//                ]
            ])
            ->add('email', EmailType::class, [
                'label' => false,
                'required' => true,
//                'attr'   =>  [
//                    'class'   => 'form__input form__input--line--one',
//                    'id' => 'email-field'
//                ]
            ])
            ->add('telephone', TextType::class, [
                'label' => false,
                'required' => true,
//                'attr'   =>  [
//                    'class'   => 'form__input form__input--line--one',
//                    'id' => 'phone-field"'
//                ]
            ])
            ->add('body', TextareaType::class, [
                'label' => false,
                'required' => true,
//                'attr'   =>  [
//                    'class'   => 'form__input form__input--line--multi',
//                    'id' => 'message-field'
//                ]
            ]);
    }

    public function getName()
    {
        return 'contact_form';
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(['data_class' => 'BackendBundle\Entity\ContactForm']);
    }
}