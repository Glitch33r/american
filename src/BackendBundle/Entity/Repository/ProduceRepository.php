<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class ProduceRepository extends EntityRepository
{
    public function getElements()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title, ls.subTitle, ls.description, ls.image FROM BackendBundle\Entity\Produce AS h JOIN BackendBundle\Entity\ProductContentBlock AS ls WITH h.id = ls.produce')
            ->execute();

        return $q;
    }

    public function  getTitle()
    {
        $q = $this->createQueryBuilder('a')->select('a.title')->getQuery()->getOneOrNullResult();
        return $q;
    }
}