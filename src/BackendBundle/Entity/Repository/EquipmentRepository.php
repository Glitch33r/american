<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class EquipmentRepository extends EntityRepository
{
    public function getWhiteBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.first_blc_title, a.first_blc_sub_title, a.first_blc_description')
            ->getQuery()->getResult();

        return $q;
    }

    public function getAdditionalBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.second_blc_title, a.second_blc_sub_title, a.second_blc_description')
            ->getQuery()->getResult();

        return $q;
    }

    public function getParalaxBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.paralax_blc_title, a.paralax_blc_sub_title, a.paralax_blc_description')
            ->getQuery()->getResult();

        return $q;
    }

    public function getLeftListBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listName FROM BackendBundle\Entity\Equipment AS cp' )
            ->execute();

        return $q;
    }

    public function getLeftListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Equipment AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.equipleft')
            ->execute();

        return $q;
    }

    public function getRigthListBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listright_blc_title, cp.listright_blc_sub_title, cp.listright_blc_description FROM BackendBundle\Entity\Equipment AS cp')
            ->execute();

        return $q;
    }

    public function getRigthListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Equipment AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.equipright')
            ->execute();

        return $q;
    }
}